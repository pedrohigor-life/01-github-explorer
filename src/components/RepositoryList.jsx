import { useState } from "react";
import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: "unform",
  description: "Forms in React",
  link: "https://github.com/pedrohigor-life?tab=repositories",
};

export function RepositoryList() {
  const [] = useState();

  return (
    <section className="repositoryList">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}
