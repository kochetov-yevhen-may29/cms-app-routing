import React from 'react';

const DummyTable: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Данные таблицы</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                FirstName
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                AGE
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-zinc-800">1</td>
              <td className="px-6 py-4 whitespace-nowrap text-zinc-800">Jonhn</td>
              <td className="px-6 py-4 whitespace-nowrap text-zinc-800">25</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-zinc-800">2</td>
              <td className="px-6 py-4 whitespace-nowrap text-zinc-800">Maria</td>
              <td className="px-6 py-4 whitespace-nowrap text-zinc-800">30</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-zinc-800">3</td>
              <td className="px-6 py-4 whitespace-nowrap text-zinc-800">Sara</td>
              <td className="px-6 py-4 whitespace-nowrap text-zinc-800">22</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DummyTable;

