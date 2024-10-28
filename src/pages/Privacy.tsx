const Privacy = () => {
  return (
    <div className="container max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">Política de Privacidade</h1>
      
      <div className="prose prose-lg">
        <p className="mb-6">
          A Cloudy Company, através do site Cloudy Trip, está comprometida em proteger sua privacidade. 
          Esta política descreve como coletamos, usamos e protegemos suas informações pessoais.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Coleta de Informações</h2>
        <p className="mb-6">
          Coletamos apenas as informações necessárias para melhorar sua experiência de viagem, 
          incluindo nome, e-mail e preferências de viagem.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Uso das Informações</h2>
        <p className="mb-6">
          Suas informações são utilizadas para:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Personalizar sua experiência</li>
          <li>Melhorar nosso site</li>
          <li>Enviar e-mails sobre novos destinos e ofertas</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Proteção de Dados</h2>
        <p className="mb-6">
          Implementamos medidas de segurança para proteger suas informações pessoais 
          contra acesso não autorizado e uso indevido.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Contato</h2>
        <p className="mb-6">
          Para questões sobre nossa política de privacidade, entre em contato através do 
          e-mail: privacy@cloudytrip.com
        </p>
      </div>
    </div>
  )
}

export default Privacy