import React, {useState} from 'react';
import './index.css';
import useForm from '../../Hooks/Form';
import NumberFormat from 'react-number-format';


const Section5 = () => {
    const [phone, setPhone] = useState('')
    const { form, onChange, resetForm } = useForm({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = event => {
        const { name, value } = event.target;
        onChange(name, value);
    };

    const submitForm = async () => {
        alert('Formulário Enviado com sucesso');
        resetForm()
    };

    return(
        <div id='section5'>
            <form onSubmit={(e) => {e.preventDefault()}}>
                <section id='container-form'>
                    <article >
                        <p><b>*Nome:</b></p>
                        <input
                            required
                            placeholder='Informe seu nome'
                            value={form.name}
                            name='name'
                            type='text'
                            onChange={handleChange}
                        />
                    </article>
    
                    <article>
                        <p><b>*E-mail:</b></p>
                        <input
                            id='email'
                            required
                            placeholder='Informe seu e-mail'
                            value={form.email}
                            name='email'
                            type='e-mail'
                            onChange={handleChange}
                        />
                    </article>
    
                    
                    <article>
                        <p><b>*Telefone:</b></p>
                        <NumberFormat
                            type={'tel'}
                            allowEmptyFormatting 
                            mask='_'
                            value={phone}
                            displayType={'input'}
                            format='(##) ##### - ####'
                            onValueChange={(values) => {setPhone(values.value) }}
                            />
                    </article>
    
                    <article>
                        <p><b>*Mensagem:</b></p>
                        <textarea
                            required
                            rows='6'
                            placeholder='Escreva aqui'
                            value={form.message}
                            name='message'
                            onChange={handleChange}
                        />
                    </article>
                </section>
                
                <button onSubmit={submitForm}>ENVIAR</button>
            </form>
        </div>
    )
}

export default Section5;