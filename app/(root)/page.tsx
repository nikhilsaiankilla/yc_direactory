import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";

export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?: string }>
}) {
  const query = (await searchParams).query;

  const posts = [{
    _id : 1,
    _createdAt: "yesturday",
    view: 55,
    author: { _id: 1, name : "nikhil", image : "https://img.freepik.com/premium-photo/boy-flat-cartoon-character-illustration_620650-2063.jpg" },
    description: "this is description",
    image: "https://images.unsplash.com/photo-1735818978089-85970221e678?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Robots",
    title: "I am Robot"
  }]
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
            posts?.length > 0 ? (posts?.map((post: StartupCardType, index: number) => (<StartupCard post={post} key={post?._id}/>))) : (<p className="no-results">No startups Found</p>)
          }
        </ul>
      </section>
    </>
  );
}
