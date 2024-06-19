import React from "react";

interface Movie {
  title: string;
  genre: string;
  year: number;
}

const MovieList = ({ movies }: { movies: Movie[] }) => {
  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="border rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-[#f0f0f0]">
                <tr>
                  <th
                    scope="col"
                    className="px-10 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-10 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Genre
                  </th>
                  <th
                    scope="col"
                    className="px-10 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Year
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {movies.map((movie, index) => (
                  <tr key={index}>
                    <td className="px-10 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      {movie.title}
                    </td>
                    <td className="px-10 py-4 whitespace-nowrap text-sm text-gray-800">
                      {movie.genre}
                    </td>
                    <td className="px-10 py-4 whitespace-nowrap text-sm text-gray-800">
                      {movie.year}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
