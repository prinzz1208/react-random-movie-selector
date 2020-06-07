import React, { Component} from 'react'
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import db from '../../firebase';
import Movies from '../../components/Movies/Movies';
import Backface from '../../components/Backface/Backface';
import './Selector.css'
class Selector extends Component {
    
    state = {
        movies: [],
        rotate: false
    }
    componentDidMount(){
        db.collection('movies').get().then( (snapshot) =>{
            var getMovies=[];
            snapshot.docs.forEach( (doc) => {
                // console.log(doc.data().Movie)
                getMovies.push({
                    id : doc.id,
                    movie : (doc.data().Movie)
                })
            })
            this.setState({movies:getMovies})

        })
        .catch(err => console.log(err))
    }
    componentDidUpdate(){
        this.randomMovie = (
            this.state.movies.length > 0 ? this.state.movies[Math.floor(Math.random() * this.state.movies.length)].movie
            :null
        ); 
    }
    addMovieHandler = (e) => {
        e.preventDefault();
        let newMovie = e.target.movieInput.value
        let addMovie = [...this.state.movies];
        e.target.movieInput.value = "";
        db.collection('movies').add({Movie:newMovie}).then(docRef =>{
            addMovie.push({id: docRef.id,movie: newMovie})
            this.setState({movies:addMovie} )
        });

    }

    deleteMovieHandler = (e) => {
        // console.log();
        const span = e.target.parentNode.children[0];
        console.log(span)
        const id = span.attributes[0].nodeValue;
        let deletedMovie = [...this.state.movies];
        deletedMovie = deletedMovie.filter( (el) => el.id !== id )

        db.collection('movies').doc(id).delete()
            .then( () => {
                console.log("Movie Deleted")
                this.setState({movies: deletedMovie});
            }
            )
            .catch( err => console.log(err))
        
    }
    rotateHandler = () => {
        console.log()
        this.setState(state => (
          {rotate: !state.rotate}
        ))    
    }
    render() {
        const classList = this.state.rotate ? "Selector rotate" : "Selector";
        // const randomMovie = ;
        return(
            <React.Fragment>
                <div className={classList}>
                    <Input add={(e) => this.addMovieHandler(e)}/>                
                    <Movies movies={this.state.movies} delete={(e) => this.deleteMovieHandler(e)}/>
                    <Button rotateHandler={this.rotateHandler}  />    
                </div>
                <Backface rotate={this.state.rotate} doRotate={this.rotateHandler} movie={this.randomMovie} />
            </React.Fragment>
        )
    }
}

export default Selector;