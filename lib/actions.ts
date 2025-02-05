"use server";

import { auth } from "@/auth";
import { parseServerActionResponse } from "./utils";
import slugify from "slugify";
import { writeClient } from "@/sanity/lib/write-client";
import cloudinary from "./cloudinary";

export const createPitch = async (state: any, form: FormData, pitch: string) => {
    const session = await auth();

    if (!session) return parseServerActionResponse({ error: "Not Signed In", status: "ERROR" })

    const { title, description, category, image } = Object.fromEntries(Array.from(form).filter(([key]) => key !== 'pitch'));


    const slug = slugify(title as string, { lower: true, strict: true });

    try {

        let imageUrl = "";

        if (image instanceof File) {
            const arrayBuffer = await image.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);

            const base64Image = `data:${image.type};base64,${buffer.toString("base64")}`;

            const uploadResponse = await cloudinary.v2.uploader.upload(base64Image, {
                folder: "pitchpoint",
            });

            imageUrl = uploadResponse?.secure_url;
        }

        const startup = {
            title,
            description,
            category,
            image: imageUrl,
            slug: {
                _type: slug,
                current: slug
            },
            author: {
                _type: "reference",
                _ref: session?.id,
            },
            pitch
        }

        const result = await writeClient.create({ _type: "startup", ...startup });

        return parseServerActionResponse({
            ...result,
            error: "",
            status: "SUCCESS",
        });
    } catch (error) {
        console.log(error);
        return parseServerActionResponse({ error: JSON.stringify(error), status: "ERROR" });
    }
}