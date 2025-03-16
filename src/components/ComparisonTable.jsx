import React from 'react';
import { CircleCheck, CircleX } from 'lucide-react';

const ComparisonTable = ({ compare, tomiLt, tomiStd, selectedStorage }) => {
  const comparisonData = [
    { feature: 'Tipo de almacenamiento', lt: 'SD', std: 'SSD' },
    { feature: 'Almacenamiento', lt: '64gb', std: '128gb' },
    { feature: 'RAM', lt: '4GB', std: '4GB' },
    { feature: 'Conexiones concurrentes AP', lt: '32', std: '60' },
    { feature: 'Frecuencia 2.4GHz', lt: '30mtrs', std: '50mtrs' },
    { feature: 'Frecuencia 5.8 GHz', lt: false, std: '30mtrs' },
    { feature: 'Pizarra digital Autocalibrable', lt: true, std: true },
    { feature: 'Antenas de Amplificación', lt: false, std: true },
    { feature: 'Puerto Ethernet', lt: false, std: true },
  ];

  return (
    <div className="overflow-x-auto scrollbar pt-16 pb-6">
      <table className="min-w-full border-separate border-spacing-0">
        <thead>
          <tr>
            <th>
              <div className="text-left px-5 md:px-8">
                <img src={compare} alt="Compare Icon" className="h-16 w-16" />
                <p className="text-lg font-black max-w-43">
                  Compara los diferentes TOMi8
                </p>
              </div>
            </th>
            <th
              className={
                selectedStorage === 'LT'
                  ? 'border-t border-l border-r border-purple-300 rounded-t-lg '
                  : ''
              }
            >
              <div
                className={`py-4 ${
                  selectedStorage === 'LT' ? 'bg-purple-50 rounded-t-lg' : ''
                }`}
              >
                <p className="text-xl font-black mb-12 ">LT</p>
                <img src={tomiLt} alt="TOMi8 LT" className="mx-auto" />
              </div>
            </th>
            <th
              className={
                selectedStorage === 'STD'
                  ? 'border-t border-l border-r border-purple-300 rounded-t-lg'
                  : ''
              }
            >
              <div
                className={`py-4 ${
                  selectedStorage === 'STD' ? 'bg-purple-50 rounded-t-lg' : ''
                }`}
              >
                <p className="text-xl font-black mb-12 ">STD</p>
                <img src={tomiStd} alt="TOMi8 STD" className="mx-auto" />
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-50">
          {comparisonData.map((row, index) => (
            <tr key={index}>
              <td
                className={`relative border-gray-300 border-t border-l px-4 md:w-[320px] md:p-5 overflow-hidden ${
                  index === 0 ? 'rounded-tl-lg' : ''
                }`}
              >
                <span className="font-bold max-w-[180px] inline-block">
                  {row.feature}
                </span>
              </td>
              <td
                className={`relative text-center py-5 border-t ${
                  selectedStorage === 'LT'
                    ? 'border-l border-r border-purple-300 bg-purple-50'
                    : 'border-l border-gray-300'
                }`}
              >
                {typeof row.lt === 'boolean' ? (
                  row.lt ? (
                    <CircleCheck
                      className={`inline h-5 ${
                        selectedStorage === 'LT' ? 'text-purple-600' : ''
                      }`}
                    />
                  ) : (
                    <CircleX className="inline h-5 text-gray-400" />
                  )
                ) : (
                  <span>{row.lt}</span>
                )}
              </td>
              <td
                className={`relative text-center py-5 border-t ${
                  selectedStorage === 'STD'
                    ? 'border-l border-r border-purple-300 bg-purple-50'
                    : ' border-r border-gray-300'
                }`}
              >
                {typeof row.std === 'boolean' ? (
                  row.std ? (
                    <CircleCheck
                      className={`inline h-5 ${
                        selectedStorage === 'STD' ? 'text-purple-600' : ''
                      }`}
                    />
                  ) : (
                    <CircleX className="inline h-5 text-gray-400" />
                  )
                ) : (
                  <span>{row.std}</span>
                )}
              </td>
            </tr>
          ))}
          {/* Última fila para cerrar el borde inferior */}
          <tr>
            <td className="border-b border-l h-1 border-gray-300"></td>
            <td
              className={`h-1 ${
                selectedStorage === 'LT'
                  ? 'border-b border-l border-r border-purple-300'
                  : 'border-b border-l border-gray-300'
              }`}
            ></td>
            <td
              className={`h-1 ${
                selectedStorage === 'STD'
                  ? 'border-b border-l border-r border-purple-300'
                  : 'border-b border-r border-gray-300'
              }`}
            ></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;
