import React from 'react';

const TechnicalSpecifications = ({ openSections, toggleCollapse }) => {
  const specs = [
    {
      name: 'Especificaciones eléctricas',
      value: 'Adaptador de corriente 5V - 6A - Consumo máximo 30 vatios',
    },
    {
      name: 'Cámara incorporada',
      value: '13 Megapíxeles 30fps, enfoque automático',
    },
    {
      name: 'Pizarra interactiva incorporada',
      value:
        'Puntero infrarrojo de última generación basado en visión artificial',
    },
    { name: 'Sistema operativo', value: 'Android 12L' },
    { name: 'Puerto USB', value: '1x 2.0' },
    { name: 'Puerto HDMI', value: 'HDMI 2.1' },
    { name: 'Procesador', value: 'Octa core de 64 bit a 2.4 Ghz' },
    { name: 'Memoria RAM', value: '4GB LPDDR4X' },
    {
      name: 'GPU',
      value: 'GPU de video Mali con soporte de IA y códecs de vídeo 8k',
    },
    { name: 'Almacenamiento', value: '64GB uSD / 128GB SSD' },
    { name: 'Tamaño', value: '107mm (diámetro) x 133mm (Altura)' },
    {
      name: 'Peso',
      value:
        '440 gr dispositivo - 970 gr dentro de la caja, incluyendo accesorios',
    },
    {
      name: 'Wifi',
      value:
        'Chipset: RTL8821CU, USB2 0, 2,4 GHz + 5 GHz. 600 Mbps (11N: 150 Mbps, 11AC: 433 Mbps). IEEE 802.11AC… 802.11b 802,11g 802.11n, WEP, WPA-PSK, WPA2-PSK, cifrado WPA/WPA2 64/128 bit.',
    },
    {
      name: 'Punto de Acceso Wifi',
      value:
        'IEEE 802.11a/b/g/n/ac/ax WLAN 2.4 Ghz con velocidad de hasta 573+1201 Mbps, CPU RISC de 32 bits de alto rendimiento dedicada, externa e interna',
    },
    { name: 'Bluetooth', value: 'Bluetooth 4.2' },
    { name: 'Ethernet LAN/WAN', value: 'NO' },
    { name: 'Interfaz móvil 3G/4G', value: 'NO' },
    { name: 'Batería', value: 'NO' },
  ];

  return (
    <div
      className={`collapse collapse-arrow cursor-pointer bg-base-100 rounded-none border-t border-gray-400 pt-6 mb-5 ${
        openSections['especificaciones'] ? 'collapse-open' : 'collapse-close'
      }`}
    >
      <input
        type="radio"
        name="my-accordion-2"
        onClick={() => toggleCollapse('especificaciones')}
      />
      <div className="collapse-title font-medium text-lg md:text-2xl">
        Especificaciones técnicas
      </div>
      <div className="collapse-content text-base">
        <div className="flex flex-1 pt-6">
          <table className="flex-1 text-blue-black overflow-hidden rounded-lg">
            <tbody>
              {specs.map((spec, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? 'bg-purple-100' : ''}
                >
                  <td className="font-medium border-r border-white py-5 px-4 md:px-3 text-center whitespace-nowrap">
                    {spec.name}
                  </td>
                  <td className="py-4 px-2 md:px-3 lg:px-5">{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSpecifications;
