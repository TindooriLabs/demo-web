import HTMLFlipBook from 'react-pageflip';
import React from 'react';
import './FlipBook.css'

const Page = React.forwardRef((props, ref) => {
    return (
        <div className="demo-page" ref={ref}>
            <div className="page-content">
                <img className='blue-print' src="blue-print.png"></img>
                {/* <h1>Page Header</h1>
                <p>{props.children}</p> */}
                <div className="footer">Page number: {props.number}</div>
            </div>
        </div>
    );
});

function FlipBook(props) {
    return (
        <HTMLFlipBook
            width={window.innerWidth * 0.5}
            height={window.innerWidth * 0.8}
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={true}
        >
            <Page number="1">Page text</Page>
            <Page number="2">Page text</Page>
            <Page number="3">Page text</Page>
            <Page number="4">Page text</Page>
            <Page number="5">Page text</Page>
            <Page number="6">Page text</Page>
        </HTMLFlipBook>
    );
}

export default FlipBook;