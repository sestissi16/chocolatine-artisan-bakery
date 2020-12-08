import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import bakeryInfo from '../bakeryData';
import './menuTopNotes.css'

class TopNotes extends Component {
    render() {
        return(
            <section id="menuTopNotes">
                {
                    Object.keys(bakeryInfo.menu.topNotes).map(function(key, index) {
                        var topNotes = bakeryInfo.menu.topNotes
                        var note = topNotes[key]
                        return <h3 className="topNoteItem">{note.firstPart}<a href={note.link}>{note.linkText}</a>{note.secondPart}</h3>
                    })
                }
            </section>
        );
    }
}

export default TopNotes;