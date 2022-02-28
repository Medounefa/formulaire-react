import React, {Component} from 'react';
import styled from 'styled-components';
// import Head from './myHeaderOne';
// import './myCss.css';
// import Styles from './myCss.module.css';


// const titreGreen = {fontSize : '50px',color : 'green'};<h1 style={titreGreen}>Commentaire</h1> 

const Title = styled.h1 `
    color:red;
    font-size:80px;
`
const Button = styled.button `
    background: black;
    color:#fff;
    padding: 12px 13px;
    font-size: 15px;
`
class Forme extends Component{

    render(){
        
        // const myClasse = this.props.head ? ('blue') : ('red');
        return(
            <div>
                <Title>Commentaire 1</Title>
                <button>Valider</button>
                <Button>Valider 2</Button>
                 

                
                {/* <button className='btn btn-danger'>Valider</button> */}
                {/* <h1 className={Styles.green}>Commentaire 1</h1> */}
               {/* <h1 className='blue'>Commentaire</h1>  */}
               {/* <Head/> */}
               {/* <p>Je suis bleu ou rouge</p> */}
               {/* <p className={ `${myClasse} bigFont`} bigFont>Je suis bleu ou rouge</p> */}
               {/* <button>Valider</button> */}
            </div>
        )
    }
}
export default Forme;