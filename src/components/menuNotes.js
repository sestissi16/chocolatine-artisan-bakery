import React, { Component } from 'react';
import bakeryInfo from '../bakeryData';
import './menuNotes.css'

class Notes extends Component {
    render() {
        const { notes, textSize } = this.props
        return(
            <section id="menuNotes">
                {
                    Object.keys(notes).map(function(key, index) {
                        var note = notes[key]
                        if(textSize === 1){
                            if(!("link" in note)) {
                                return <h1 className="noteItem">{note.firstPart}</h1>
                            }else{
                                return <h1 className="noteItem">{note.firstPart}<a href={note.link}>{note.linkText}</a>{note.secondPart}</h1>
                            }
                        } else if (textSize === 2) {
                            if(!("link" in note)) {
                                return <h2 className="noteItem">{note.firstPart}</h2>
                            }else{
                                return <h2 className="noteItem">{note.firstPart}<a href={note.link}>{note.linkText}</a>{note.secondPart}</h2>
                            }
                        } else if (textSize === 3) {
                            if(!("link" in note)) {
                                return <h3 className="noteItem">{note.firstPart}</h3>
                            }else{
                                return <h3 className="noteItem">{note.firstPart}<a href={note.link}>{note.linkText}</a>{note.secondPart}</h3>
                            }
                        } else if (textSize === 4) {
                            if(!("link" in note)) {
                                return <h4 className="noteItem">{note.firstPart}</h4>
                            }else{
                                return <h4 className="noteItem">{note.firstPart}<a href={note.link}>{note.linkText}</a>{note.secondPart}</h4>
                            }
                        } else if (textSize === 5) {
                            if(!("link" in note)) {
                                return <h5 className="noteItem">{note.firstPart}</h5>
                            }else{
                                return <h5 className="noteItem">{note.firstPart}<a href={note.link}>{note.linkText}</a>{note.secondPart}</h5>
                            }
                        } else {
                            if(!("link" in note)) {
                                return <h6 className="noteItem">{note.firstPart}</h6>
                            }else{
                                return <h6 className="noteItem">{note.firstPart}<a href={note.link}>{note.linkText}</a>{note.secondPart}</h6>
                            }
                        }
                        
                    })
                }
            </section>
        );
    }
}

export default Notes;