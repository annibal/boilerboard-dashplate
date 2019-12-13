import React, { useState, useEffect } from 'react'
import { Layout } from 'antd'
const { Footer } = Layout

function AppFooter() {

    const [quote, setQuote] = useState(['Sample Text', 'Footer Text', 'Generic Inspirational Message'][Math.floor(Math.random() * 3)]);
    const [author, setAuthor] = useState('Annibal');
    const [link, setLink] = useState('#');

    useEffect(() => {
        fetch('https://quotes.rest/qod.json').then(r => r.json()).then(r => {
            setQuote(r.contents.quotes[0].quote)
            setAuthor(r.contents.quotes[0].author)
            setLink(r.contents.quotes[0].permalink)
        }).catch(e => console.log("Couldn't get a nice quote"))
    }, [])

    return (
        <Footer style={{ textAlign: 'center' }}>
            <span className="footer-quote-container">
                <span className="footer-quote">{quote}</span>
                <a className="footer-quote-author" href={link}>{author}</a>
            </span>
        </Footer>
    )
}

export default AppFooter