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
    <div className="overflow-x-auto scrollbar px-4 pt-16 pb-[25px]">
      <table className="min-w-full text-blue-black border-separate border-spacing-0 px-4">
        <thead>
          <tr>
            <th>
              <div className="text-left px-[20px] md:px-[30px]">
                <img src={compare} alt="Compare Icon" className="h-16 w-16" />
                <p className="text-[20px] font-black max-w-[170px]">
                  Compara los diferentes TOMi8
                </p>
              </div>
            </th>
            <th
              className={
                selectedStorage === 'LT'
                  ? ' border-t border-x border-purple-600 rounded-t-lg'
                  : ''
              }
            >
              <div
                className={`py-4 ${
                  selectedStorage === 'LT' ? 'bg-purple-50' : ''
                }`}
              >
                <p
                  className={`text-[20px] font-black mb-[50px] ${
                    selectedStorage === 'LT' ? 'text-purple-600' : ''
                  }`}
                >
                  LT
                </p>
                <img src={tomiLt} alt="TOMi8 LT" className="mx-auto" />
              </div>
            </th>
            <th
              className={
                selectedStorage === 'STD'
                  ? 'border-t border-x border-purple-600 rounded-t-lg'
                  : ''
              }
            >
              <div
                className={`py-4 ${
                  selectedStorage === 'STD' ? 'bg-purple-50' : ''
                }`}
              >
                <p
                  className={`text-[20px] font-black mb-[50px] ${
                    selectedStorage === 'STD' ? 'text-purple-600' : ''
                  }`}
                >
                  STD
                </p>
                <img src={tomiStd} alt="TOMi8 STD" className="mx-auto" />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {comparisonData.map((row, index) => (
            <tr key={index}>
              <td className="relative border-t border-l px-4 md:w-[320px] md:p-5 overflow-hidden">
                <span className="font-bold max-w-[180px] inline-block">
                  {row.feature}
                </span>
              </td>
              <td
                className={`relative text-center py-5 border-t border-x
                  ${
                    selectedStorage === 'LT'
                      ? 'border-l border-r border-purple-600 bg-purple-50 '
                      : 'border-l border-r'
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
                  <span
                    className={selectedStorage === 'LT' ? 'font-medium' : ''}
                  >
                    {row.lt}
                  </span>
                )}
              </td>
              <td
                className={`relative text-center py-5 border-t border-r
                  ${
                    selectedStorage === 'STD'
                      ? 'border-r border-l border-purple-600 bg-purple-50'
                      : ''
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
                  <span
                    className={selectedStorage === 'STD' ? 'font-medium' : ''}
                  >
                    {row.std}
                  </span>
                )}
              </td>
            </tr>
          ))}
          {/* Última fila para cerrar el borde inferior */}
          <tr>
            <td className="border-b border-l h-1"></td>
            <td
              className={`border-b h-1 ${
                selectedStorage === 'LT'
                  ? 'border-b border-l border-r border-purple-600 rounded-b-lg'
                  : 'border-l border-r'
              }`}
            ></td>
            <td
              className={`border-b h-1 ${
                selectedStorage === 'STD'
                  ? 'border-b border-l border-r border-purple-600 rounded-b-lg'
                  : 'border-r'
              }`}
            ></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;
