import { useFetch } from './main';
// import { useFetch } from 'react-use-fetch'; // package import

type RepositoryType = {
  id: string;
  full_name: string;
  description: string;
};

function Example() {
  const { data: repositories, isFetching } = useFetch<RepositoryType[]>(
    'https://api.github.com/users',
  );

  if (isFetching) return <div>loading...</div>;

  return (
    <ul>
      {repositories?.map(repo => {
        return (
          <li key={repo.id}>
            <strong>{repo.full_name}</strong>
            <p>{repo.description}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default Example;
