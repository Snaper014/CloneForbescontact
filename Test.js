let Racine = document.getElementById('root');

        function Page(){

const [Prenom, setPrenom] = React.useState(undefined);
const [Email, setEmail] = React.useState();
const [Ville, setVille] = React.useState();
const [Sujet, setSujet] = React.useState();
const [error, setError] = React.useState();
const [error2, setError2] = React.useState();
const [error3, setError3] = React.useState();
const [error4, setError4] = React.useState();
const [error5, setError5] = React.useState();
const [error6, setError6] = React.useState();
const [error7, setError7] = React.useState();
const [error8, setError8] = React.useState();
const [error9, setError9] = React.useState();

const [Nom, setNom] = React.useState();
const [Societe, setSociete] = React.useState();
const [Numero, setNumero] = React.useState();
const [Message, setMessage] = React.useState();
const [Spam, setSpam] = React.useState();
const Verif1 = /[\w]/g;
const Verif2 = /[@]/g;
const verif3 = /[0-9]{10}/g;
const verif4 = /[2]{1}/g;


        const [ErrVide, setErrvide] = React.useState();
            
         function HandleChange(event){ 
            
            
            setError(event.target.value.match(Verif1) ? null : 'Le champs que vous avez renseignez n\'est pas valide' )
            setPrenom(event.target.value)
            
         } 
         function HandleChangeA(event){ 
           
            setError2(event.target.value.match(Verif2) ? null : 'L\'email n`\'est pas valide' )
            setEmail(event.target.value) }
         function HandleChangeB(event){
            setError3(event.target.value.match(Verif1) ? null : 'Le champs que vous avez renseignez n\'est pas valide' )
            setVille(event.target.value) }
         function HandleChangeC(event){
            setError4(event.target.value.match(Verif1) ? null : 'Le champs que vous avez renseignez n\'est pas valide' ) 
            setSujet(event.target.value) }
         function HandleChangeD(event){
            setError5(event.target.value.match(Verif1) ? null : 'Le champs que vous avez renseignez n\'est pas valide' ) 
            setNom(event.target.value) }
         function HandleChangeE(event){ 
            setError6(event.target.value.match(Verif1) ? null : 'Le champs que vous avez renseignez n\'est pas valide' )
            setSociete(event.target.value) }
         function HandleChangeF(event){ 
            setError7(event.target.value.match(verif3) ? null : 'Le numéro n\'est pas valide' )
            setNumero(event.target.value) }
        function HandleChangeG(event){
            setMessage(event.target.value)
            setError8(event.target.value.match(Verif1) ? null : 'Le champs que vous ave renseignez n\'est pas valide')
        }
        function HandleChangeH(event){

            setError9(event.target.value.match(verif4) ? null : 'Le champs que vous avez renseignez n\'est pas valide')
            setSpam(event.target.value)
        }
       const [Koluche, setKoluche] = React.useState(); function Patouf(){setKoluche(undefined)};
       const [Dieudo, setDieudo] = React.useState(); function Madoff(){setDieudo(undefined)};
       const [Serpent, setSerpent] = React.useState(); function Mamba(){setSerpent(undefined)};
       const [Ronaldo, setRonaldo] = React.useState(); function Goat(){setRonaldo(undefined)};
       const [Xelor, setXelor] = React.useState(); function Wakfu(){setXelor(undefined)};
       const [Platon, setPlaton] = React.useState(); function Philo(){setPlaton(undefined)};
       const [Warren, setWarren] = React.useState(); function Oracle(){setWarren(undefined)};
       const [Quartz, setQuartz] = React.useState(); function Matiere(){setQuartz(undefined)};
        function conflit(){
            setErrvide(undefined)
        }
         function Changement(){
               setErrvide(Prenom == (undefined) ? 'Champs obligatoire': null)
                setKoluche(Email == (undefined) ? 'Champs obligatoire': null) 
                setDieudo(Ville == (undefined) ? 'Champs obligatoire' : null)
                setSerpent(Sujet == (undefined) ? 'Champs obligatoire' : null)
                setRonaldo(Spam == (undefined) ? 'Champs obligatoire' : null)
                setXelor(Nom == (undefined) ? 'Champs obligatoire' : null)
                setPlaton(Societe == (undefined) ? 'Champs obligatoire' : null)
                setWarren(Numero == (undefined) ? 'Champs obligatoire' : null)
                setQuartz(Message ==(undefined) ? 'Champs obligatoire' : null)

            if(Prenom && Email && Ville && Sujet && Ville && Sujet && Nom && Societe && Numero && Message){
                alert(`Voici les informations que vous avez fournis : 
               Prenom : ${Prenom} 
                Email : ${Email} 
                Ville : ${Ville} 
                Sujet : ${Sujet}
                Nom : ${Nom} 
                Societé : ${Societe} 
                Numéro de téléphone : ${Numero} 
                Message : ${Message}`)
                }
         }
         let Fouler = document.getElementsByClassName('ecart');
         console.log(Fouler);
         

            const div1BarNav = (
                <div id="Barnavdiv1">
                    <p className="ecart" style={{height : '59px'}}  >Forbes</p>
                    <p className="ecart hauteur centre" style={{fontSize: '10px'}}>Classements</p>
                    <p className="ecart hauteur centre" style={{fontSize: '10px'}}>Brandvoice</p>
                    <p className="ecart hauteur centre" style={{fontSize: '10px'}}>Bibiliothéque</p>
                    <p className="ecart hauteur centre"style={{fontSize: '10px', backgroundColor : 'red'}}>Magazine Forbes</p>
                    <p className="ecart hauteur centre" style={{fontSize: '10px', backgroundColor : '#888787'}}>NFT Forbes</p>
                    </div>
            );
            const div2BarNav = (
                <div id="Barnavdiv2">
                    <div id="taille2" style={{color : 'white'}}><i className="fa-solid fa-magnifying-glass" style={{color: 'gray'}}></i></div>
                    <input type="texte" id="taille" placeholder="Rechercher"></input>
                </div>
                );
            
            
                let div3Bar =  (
                    <div id ="Barnavdiv3">
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-twitter" ></i>
                        <i className="fa-brands fa-linkedin-in"></i>
                        <i className="fa-brands fa-youtube"></i>
            
                    </div>
                );
                <i class="fa-thin fa-rocket-launch"></i>
                const div4bar = (
                    <div id="Barnavdiv4">
                        <i className="fa-solid fa-user" style={{padding : '8px'}}></i>
                        <p>Club Forbes</p>
                    </div>
                );
                
                const SousSection = ['Business', 'Technologie', 'Entrenpreneurs', 'Management',
                 'Finance', 'Environnement', 'lifestyle', 'Luxe', 'Femmes@Forbes'];
            
                 function Tableau () {
                     
                     return <div className="simple">{SousSection.map( (element, index) => (<p className="config " key={index}>{element}</p>))}</div>
                    };
                    
                    const titre = <div className="Titre1">Annoncer sur Forbes</div>;

                const Genre = ['Mlle', 'Mme', 'Mr'];
                
                function Bloc1() {
                    
                    return   (
                    <div className="formulaire un">
                        
                            <select className="Reglage">{Genre.map((element, index) => <option  key={index}>{element}</option>)}</select>
                            <input  onClick={conflit} onChange={HandleChange}  id="Porque" value={Prenom}className="Reglage"key={0} type="text" placeholder={'Prénom*'} required></input>
                            <div style={{color : '#990000', fontSize : '16px'}} className="Encore" >{error}{ErrVide}</div>
                        
                            <input onClick={Patouf}  onChange={HandleChangeA}  value={Email}className="Reglage"key={1} type="email" placeholder={'E-mail*'} required></input>
                            <div style={{color : '#990000', fontSize : '16px'}} className="Encore">{error2}{Koluche}</div>
                            
                            <input  onClick={Madoff} onChange={HandleChangeB}  value={Ville}className="Reglage"key={2} type="text" placeholder={'Ville*'} required></input>
                            <div style={{color : '#990000', fontSize : '16px'}} className="Encore">{error3}{Dieudo}</div>
                           
                            <input  onClick={Mamba} onChange={HandleChangeC}  value={Sujet}className="Reglage"key={3} type="text" placeholder={'Sujet*'} required></input>
                            <div style={{color : '#990000', fontSize : '16px'}} className="Encore">{error4}{Serpent}</div>
                          
                            <div>
                                <label  style={{fontSize : '16px', fontWeight : '700'}}>Anti-spam : combien y a t-il de 'r'"dans Forbes France"?</label>
                                <input   onClick={Goat}  className="Reglage"  onChange={HandleChangeH}></input>
                                <div style={{color : '#990000', fontSize : '16px'}} className="Encore" value={Spam}>{error9}{Ronaldo} </div>
                               
                            </div>
                                <div className="Encore">
                                    <label style={{fontWeight : '700'}}>Accord RGPD</label>
                                </div>
                            <div className="Encore"> 
                                <input type="checkbox" required></input>
                                <label> J'ai lu la politique de confidentialités de Forbes</label>
                            </div>
                       
            
                        </div>
                        )
                    }
                    const Pays = ['France', 'Cameroun', 'Costa Rica', 'Belgique', 'Brazil', 'Aregntine',
                'Portugal', 'Beauf', 'Espagne', 'Finalande', 'Chine', 'Jpaon', 'USA', 'Canada', 'Mexique',
            'Chili', 'Inde', 'Pakistan', 'Mozambique', 'Zambie', 'Namibie', 'Pologne', 'Allemagne',
        'England'];
                    function Bloc2() { 
                        return( 
                            <div className="formulaire deux">
                                     <input   onClick={Wakfu} onChange={HandleChangeD}  className="Reglage"key={0} type="text" placeholder={'Nom*'} value={Nom} required></input>
                                         <div style={{color : '#990000', fontSize : '16px'}} className="Encore">{error5}{Xelor}</div>
                                        
                                        <input  onClick={Philo} onChange={HandleChangeE}  className="Reglage"key={1} type="text" placeholder={'Société*'} value={Societe} required></input>
                                        <div style={{color : '#990000', fontSize : '16px'}} className="Encore">{error6}{Platon}</div>
                                       
                                        <input onClick={Oracle}  onChange={HandleChangeF}  className="Reglage"key={2} type="text" placeholder={'+33...'} value={Numero}></input>
                                        <div style={{color : '#990000', fontSize : '16px'}} className="Encore">{error7}{Warren}</div>
                                       
                                        <select className="Reglage">{Pays.map((element, index) => <option  key={index}>{element}</option>)}</select>
                                        <textarea onClick={Matiere} onChange={HandleChangeG}   style={{width: '100%', height : '14vh', fontSize : '1.2em'}} placeholder=" Message" value={Message} required></textarea>
                                        <div style={{color : '#990000', fontSize : '16px'}} className="Encore">{error8}{Quartz}</div>
                                       
                        </div>
                        
                        ) 
                    }
                    const Services = ['Abonnement Magazine', 'Brandvoice', 'club Forbes'];
                    const Newsletters = ['Newsletters Quotidiennes', 'Newsletters Inmanquables'];
                    const Mention = ['Condtion Gnérales d\'utilisations', 'Chartes d\'utilisations', 'Politique de confidentialités'];
                    const Contact = ['Annoncer sur forbes', 'Etre Contributeur sur Forbes', 'Contacter la rédaction', 'Contacter la technique', 'Proposition de partenariat']
             function Footer(){
                return(
                    <div id="Pied">

                        <div className="folok" id="cvn">
                            <p style={{paddingRight: '10px'}}>Forbes</p>
                            <React.Fragment >
                                {SousSection.map((element, index) => <p key={index} style={{padding : '0px 6px 0px 6px', fontSize: '12px'} }>{element}</p>)}
                            </React.Fragment>
                        </div>
                        <div className=" Venger" >
                        <p style={{paddingBottom: '10px', color: 'red'}}>Services et produits</p>
                            <React.Fragment >
                                {Services.map((element, index) => <p key={index} style={{ fontSize: '16px'} }>{element}</p>)}
                            </React.Fragment>
                        </div>
                            <div className=" Venger" id="pi2">
                        <p style={{paddingBottom: '10px', color : 'red'}}>Newsletters</p>
                            <React.Fragment >
                                {Newsletters.map((element, index) => <p key={index} style={{ fontSize: '16px'} }>{element}</p>)}
                            </React.Fragment>
                        </div>
                        

                        <div className=" Venger" id="pi3">
                        <p style={{paddingBottom: '10px', color : 'red'}}>Mentions Légales</p>
                            <React.Fragment >
                                {Mention.map((element, index) => <p key={index} style={{ fontSize: '16px'} }>{element}</p>)}
                            </React.Fragment>
                        </div>
                        <div className=" Venger" id="pi1">
                        <p style={{paddingBottom: '10px', color : 'red'}}>Contact</p>
                            <React.Fragment >
                                {Contact.map((element, index) => <p key={index} style={{ fontSize: '16px'} }>{element}</p>)}
                            </React.Fragment>

                        </div>

                        <p  id="Paragraphe">360 Business est éditeur de Forbes.fr et OniriQ.fr</p>

                    </div>
                )
             }       
                                    
                    const Bouton = <button    className="btn" onClick={Changement}>Envoyer</button>
                    const Entete = <div className="Barnav ">{div1BarNav}{div2BarNav}{div3Bar}{div4bar}</div>;
                    const Section = <div className="Principale">{titre}<Bloc1 /><Bloc2 /></div>     
                    
    return(
            <React.Fragment>
            {...Entete}
            <Tableau />
            {...Section}
            {Bouton}
            <Footer />
            </React.Fragment>              
    )
};

ReactDOM.render(<Page />, Racine);