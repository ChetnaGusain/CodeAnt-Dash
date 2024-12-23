import React from "react";

const repositories = [
    {
        name: 'design-system',
        type: 'Public',
        language: 'React',
        size: '7320 KB',
        updated: '1 day ago',
      },
      {
        name: 'codeant-ci-app',
        type: 'Private',
        language: 'Javascript',
        size: '5871 KB',
        updated: '2 days ago',
      },
      {
        name: 'analytics-dashboard',
        type: 'Private',
        language: 'Python',
        size: '4521 KB',
        updated: '5 days ago',
      },
      {
        name: 'mobile-app',
        type: 'Public',
        language: 'Swift',
        size: '3096 KB',
        updated: '3 days ago',
      },
      {
        name: 'e-commerce-platform',
        type: 'Private',
        language: 'Java',
        size: '6210 KB',
        updated: '6 days ago',
      },
      {
        name:"blog-website",
        type:"Public",
        language:"HTML/CSS",
        size:"1876 KB",
        updated:"4 days ago",
       },
];

function RepositoryDashboard() {
    return (
<div className="calendar bg-white shadow-md rounded-lg p-6 border w-full h-full">
<div className="header mb-1 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Repositories</h1>
            <p className="text-gray-600">{repositories.length} total repositories</p>
          </div>
  
          <div className="flex gap-3">
            <button
              className="px-4 py-2 bg-white rounded-lg shadow-md border border-zinc-300 text-gray-700 text-sm font-medium"
            >
              Refresh All
            </button>
  
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md text-sm font-medium"
            >
              Add Repository
            </button>
          </div>
        </div>
  
        <input
          type="text"
          placeholder="Search Repositories"
          className="w-full p-2 mb-6 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        />
  
  <div className="repository-list space-y-4">
  {repositories.map((repo, index) => (
    <div
      key={index}
      className="repository-card p-4 border rounded-lg"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          {repo.name}
          <span
            className={`px-3 py-1 text-sm rounded-full ${
              repo.type === "Public"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {repo.type}
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-3 text-sm text-gray-600 mt-2">
        <span>{repo.language}</span>
        <span>{repo.size}</span>
        <span>Updated {repo.updated}</span>
      </div>
    </div>
  ))}
</div>

      </div>
    );
  }
  

export default RepositoryDashboard;
