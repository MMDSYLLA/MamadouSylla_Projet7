import React from 'react';// Classe MonFormulaire (extension de component)


// Création du  composant_Class 'MonFormulaire'
class MonFormulaire extends React.Component { 
  
//Initialisation de la variable d'état prénom
    state = { prenom: '',
              salutation: '',
              mot_de_passe: '',
              e_mail: ''
            };
  
   // Methode ChangementPrenom() 
   // Arrivée à chaque changement effectué dans la zône de saisie du prénom
    ChangementPrenom = (event) => {
      // Memorisation de la variable d'état prenom
      this.setState({prenom: event.target.value});
    }
  
    //Methode validationPrenom
    //NB: Activée sur un clic sur le bouton de validation du formulaire
    validationPrenom=(event) =>  {
      event.preventDefault () ;
    /* Avec la methode preventDefault (), le comportement par défaut de 
     l'évènement sera annulé.
     Et, tout code écrit dans la présente méthode sera exécuté par la navigateur.
     Ici, l'intérêt est que la page soit réinitialisée.
     ====== Voir https://developper.mozilla.org/fr/docs/web/API/Event/
     preventDefault  */
     
     // Message d'alerte
     alert("Vous avez validé le prénom" + this.state.prenom);
  
     // Modification de la variable d'état salutation
      if(this.state.prenom) {
        this.setState({salutation:"Bonjour"+this.state.prenom});
      }
  
      else{this.setState({salutation:""});
  
      }
  
      }
  
    
  //const root = ReactDOM.createRoot(document.getElementById('root'));
  //root.render(
  
  // Methode render
    render( ) {
    return ( 
    
      // Formulaire
      <form id='formLog' onSubmit={this.validationPrenom}>
        {/* Invite de saisie du prénom*/}
       <div>
          <label> Votre prénom</label> < br />
          <input type='text' onChange={this.ChangementPrenom} />    
       </div> 

      <div>
         <label> e_mail </label> < br />
         <input type='text'  placeholder='renseignez votre e_mail' onChange={this.ChangementPrenom} /> < br /> < br />     
      </div>
      
      <div>
          <label>mot_de_passe</label> < br />< br />
          <input type='text'  placeholder='entrez votre mot de passe' onChange={this.ChangementPrenom} />  < br /> < br />     
      </div>
      
     
      {/*Bouton de validation*/}
      <input type='submit'/>
  
      {/* Message de salutation*/}
      <h1>{this.salutation}</h1>
    </form>
    );
  }
  
  }
  export default MonFormulaire;
  
