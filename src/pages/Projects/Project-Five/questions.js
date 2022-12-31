import { useState } from 'react';
import '../../global.scss';

export default function Questions() {
    const [question, setQuestion] = useState(1)
    const [question1, setQuestion1] = useState()
    const [question2, setQuestion2] = useState()
    const [question3, setQuestion3] = useState()
    const [question4, setQuestion4] = useState()
    const [question5, setQuestion5] = useState()
    const [acertos, setAcertos] = useState(0);
    return (
        <section>
            {question == 1 &&
                <section className='quizzApp'>
                    <div className='quizzApp-Question'>
                        <h1>Pergunta 1<span>/5</span></h1>
                        <ul></ul>
                        <h4>Qual é o nome da música que a Phoebe
                            canta e que ficou famosa?</h4>
                    </div>
                    <div className='quizApp-Options'>
                        <option onClick={() => {
                            setQuestion1(1);
                            setQuestion(2)
                        }} className='quizApp-Option'>Cute Cat</option>
                        <option onClick={() => {
                            setQuestion1(2);
                            setQuestion(2)
                        }} className='quizApp-Option'>Ugly Cat</option>
                        <option onClick={() => {
                            setQuestion1(3);
                            setQuestion(2);
                            setAcertos(acertos + 1)
                        }} className='quizApp-Option'>Smelly Cat</option>
                        <option onClick={() => {
                            setQuestion1(4);
                            setQuestion(2)
                        }} className='quizApp-Option'>Stink Cat</option>
                    </div>
                </section>}
            {question == 2 &&
                <section className='quizzApp'>
                    <div className='quizzApp-Question'>
                        <h1>Pergunta 2<span>/5</span></h1>
                        <ul></ul>
                        <h4>Qual é o nome do filho mais velho do Will Smith?</h4>
                    </div>
                    <div className='quizApp-Options'>
                        <option onClick={() => {
                            setQuestion2(1);
                            setQuestion(3)
                        }} className='quizApp-Option'>Pedro Horvath</option>
                        <option onClick={() => {
                            setQuestion2(2);
                            setQuestion(3)
                        }} className='quizApp-Option'>Jaden Smith</option>
                        <option onClick={() => {
                            setQuestion2(3);
                            setQuestion(3);
                            setAcertos(acertos + 1)
                        }} className='quizApp-Option'>Trey Smith</option>
                        <option onClick={() => {
                            setQuestion2(4);
                            setQuestion(3)
                        }} className='quizApp-Option'>Elisa Sanchez</option>
                    </div>
                </section>}
            {question == 3 &&
                <section className='quizzApp'>
                    <div className='quizzApp-Question'>
                        <h1>Pergunta 3<span>/5</span></h1>
                        <ul></ul>
                        <h4>Qual ano ocorreu a morte do pelé?</h4>
                    </div>
                    <div className='quizApp-Options'>
                        <option onClick={() => {
                            setQuestion3(1);
                            setQuestion(4)
                        }} className='quizApp-Option'>2001</option>
                        <option onClick={() => {
                            setQuestion3(2);
                            setQuestion(4)
                        }} className='quizApp-Option'>1996</option>
                        <option onClick={() => {
                            setQuestion3(3);
                            setQuestion(4);
                            setAcertos(acertos + 1)
                        }} className='quizApp-Option'>2022</option>
                        <option onClick={() => {
                            setQuestion3(4);
                            setQuestion(4);
                        }} className='quizApp-Option'>2021</option>
                    </div>
                </section>}
            {question == 4 &&
                <section className='quizzApp'>
                    <div className='quizzApp-Question'>
                        <h1>Pergunta 4<span>/5</span></h1>
                        <ul></ul>
                        <h4>Qual é o nome da música mais famosa que o Imagine Dragons cantou?</h4>
                    </div>
                    <div className='quizApp-Options'>
                        <option onClick={() => {
                            setQuestion4(1);
                            setQuestion(5);
                            setAcertos(acertos + 1)
                        }} className='quizApp-Option'>Bones</option>
                        <option onClick={() => {
                            setQuestion4(2);
                            setQuestion(5)
                        }} className='quizApp-Option'>Believer</option>
                        <option onClick={() => {
                            setQuestion4(3);
                            setQuestion(5)
                        }} className='quizApp-Option'>Enemy</option>
                        <option onClick={() => {
                            setQuestion4(4);
                            setQuestion(5)
                        }} className='quizApp-Option'>Thunder</option>
                    </div>
                </section>}
            {question == 5 &&
                <section className='quizzApp'>
                    <div className='quizzApp-Question'>
                        <h1>Pergunta 5<span>/5</span></h1>
                        <ul></ul>
                        <h4>Qual é o nome da música mais famosa que o The Weeknd cantou?</h4>
                    </div>
                    <div className='quizApp-Options'>
                        <option onClick={() => {
                            setQuestion5(1);
                            setQuestion(6)
                        }} className='quizApp-Option'>Blinding Lights</option>
                        <option onClick={() => {
                            setQuestion5(2);
                            setQuestion(6);
                            setAcertos(acertos + 1)
                        }} className='quizApp-Option'>Creepin'</option>
                        <option onClick={() => {
                            setQuestion5(3);
                            setQuestion(6)
                        }} className='quizApp-Option'>Starboy</option>
                        <option onClick={() => {
                            setQuestion5(4);
                            setQuestion(6)
                        }} className='quizApp-Option'>I Was Never There</option>
                    </div>
                </section>}
            {question == 6 &&
                <section className='quizzApp'>
                    <div className='quizzApp-Question'>
                        <h1>Acertou
                            {acertos == 0 && " Nenhuma Pergunta"}
                            {acertos == 1 && ` ${acertos} Pergunta`}
                            {acertos == 2 && ` ${acertos} Perguntas`}
                            {acertos == 3 && ` ${acertos} Perguntas`}
                            {acertos == 4 && ` ${acertos} Perguntas`}
                            {acertos == 5 && " Todas As Perguntas"}
                        </h1>
                    </div>
                </section>}
        </section>

    )
}