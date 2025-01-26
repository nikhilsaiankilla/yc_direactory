import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";
import { client } from "@/sanity/lib/client";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";

export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?: string }>
}) {
  const query = (await searchParams).query;
  const posts = await client.fetch(STARTUPS_QUERY)

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">pitch your startup, <br />connect with entrepreneures</h1>
        <p className="sub-heading !max-w-3xl">Submit ideas, Vote on Pitches, and get noticed in virtual competitions</p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">{query ? `Search results for "${query}"` : "All Startups"}</p>

        <ul className="card_grid">
          {
            posts?.length > 0 ? (posts?.map((post: StartupTypeCard, index: number) => (<StartupCard post={post} key={post?._id} />))) : (<p className="no-results">No startups Found</p>)
          }
        </ul>
      </section>
    </>
  );
}
