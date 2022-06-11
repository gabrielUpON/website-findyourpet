import React, { useState } from 'react'
import PetsDetails from '../components/PetsDetails'
import Footer from '../components/Footer'
import FormSignUpDetails from '../components/FormSignUpDetails'

import Logo from '../../assets/logo-white.png'
import PetServices from '../services/pet.services'

const SignUp = () => {
    const [PetName, setPetName] = useState('');
    const [PetDescription, setPetDescription] = useState('');
    // const [PetPhoto, setPetPhoto] = useState('');
    const [PetLocale, setPetLocale] = useState('');
    const [PetContact, setPetContact] = useState('');
    const [PetStatus, setPetStatus] = useState('');

    function sendDataSelect() {
        const formStatus = document.getElementById('status')
        const resultStatus = formStatus.value
        setPetStatus(resultStatus)
        console.log('Status:', resultStatus)
    }

    function sendData() {
        const formName = document.getElementById('name')
        const resultName = formName.value
        setPetName(resultName)

        const formDescription = document.getElementById('description')
        const resultDescription = formDescription.value
        setPetDescription(resultDescription)

        // const formPhoto = document.getElementById('photo')
        // const resultPhoto = formPhoto.value
        // setPetPhoto(resultPhoto)

        const formLocale = document.getElementById('locale')
        const resultLocale = formLocale.value
        setPetLocale(resultLocale)

        const formContact = document.getElementById('contact')
        const resultContact = formContact.value
        setPetContact(resultContact)

        if (PetName === '' || PetDescription === '' ||
            PetLocale === '' || PetContact === '' || PetStatus === '') {
            alert('Por favor, preencha todos os campos')
        } else {
            const NewPets = {
                name: PetName,
                description: PetDescription,
                locale: PetLocale,
                contact: PetContact,
                status: PetStatus
            }

            async function addToFirebase() {
                await (PetServices.addPets(NewPets)),
                window.location.href="/pets"
            }
            
            
            addToFirebase();
        }
    }

    return (
        <>
            <PetsDetails>
                <nav>
                    <a href="/signup">Perdi meu bichinho</a>
                    <a href="/signup">Encontrei um bichinho</a>
                    <a href="/pets"><img src={Logo} alt="Logo" /></a>
                    <a href="/signup">Quero adotar um animalzinho</a>
                    <a href="/maps">Localizar um animalzinho</a>
                </nav>

                <a href="/signup" className="advice-yellow">
                    <i className="uil uil-shield-exclamation"></i>&nbsp;
                    Procure colocar as informações corretamente - Não será possível editar depois!
                    &nbsp;<i className="uil uil-shield-exclamation"></i>
                </a>
            </PetsDetails>

            <FormSignUpDetails>
                <form>
                    <h4>Nome do Animal</h4>
                    <input type="text" id="name" placeholder="Nome do Animalzinho"
                        maxLength={15} size={30} />

                    {/* <h4>Foto do Animal</h4>
                    <input type="file" id="photo" /> */}

                    <h4>Descrição do Animal</h4>
                    <textarea id="description" placeholder="Cachorro pequeno, Pêlo branco, carinhoso, gosta de bolinhas" maxLength={50}
                        rows="4" cols="28" size={30} />

                    <h4>Bairro/Cidade do Animal</h4>
                    <input type="text" id="locale" placeholder="Bairro e Cidade do Animalzinho"
                        maxLength={20} size={30} />

                    <h4>Tipo da Situação:</h4>
                    <select id="status" onChange={() => sendDataSelect()}>
                        <option value="">Selecione</option>
                        <option value="Doação">Doação</option>
                        <option value="Encontrado">Encontrado</option>
                        <option value="Perdido">Perdido</option>
                    </select>

                    <h4>Telefone para contato</h4>
                    <div>
                        <input type="text" id="contact" placeholder="98765432101"
                            maxLength={11} size={30} />
                    </div>
                    <i>Não coloque espaço, traço ou parentêses</i>

                    <div>
                        <button type="reset" className="reset">Limpar</button>
                        <button type="button" className="send" onClick={sendData}>Cadastrar</button>
                    </div>
                </form>
            </FormSignUpDetails>

            <Footer />
        </>
    )
}

export default SignUp