import './Volunteers.css';


export const Volunteers = () => {
  return (
    <div className='volunteers-container'>
      <h1 className='volunteers-header'>Para Voluntariado</h1>
      <p className='volunteers-intro'>Preencha o formulário abaixo para se inscrever como voluntário e ajudar nosso asilo</p>

      <form className='vonlunteers-form'>
        <input type='text' placeholder='Nome Completo' className='volunteers-input' required/>
        <input type='text' placeholder='Idade' className='volunteers-input' min='18' required/>
        
        <select className='volunteers-input' required>
          <option value="">Selecione o gêero</option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
          <option value="Outro">Outro</option>
        </select>

        <input type='email' placeholder='E-mail' className='volunteers-input' required/>
        <input type='text' placeholder='Telefone' className='volunteers-input' required/>
        <input type='text' placeholder='Disponibilidade de horário (ex.: Seg-Sex, 9h-12h)' className='volunteers-input' required/>
        <textarea placeholder='Experiência Prévia (opcional)' className='volunteers-input' rows='3'></textarea>
        <textarea placeholder='Motivação para Voluntariado' className="volunteers-input" rows='4' required></textarea>
        <button type='submit' className='volunteers-button'>Enviar</button>
      </form>
    </div>
  )
}
