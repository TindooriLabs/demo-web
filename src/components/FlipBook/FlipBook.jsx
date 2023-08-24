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
            width={500}
            height={800}
            // size="stretch"
            // minWidth={315}
            // maxWidth={1000}
            // minHeight={400}
            // maxHeight={1533}
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={true}
            // onFlip={this.onPage}
            // onChangeOrientation={this.onChangeOrientation}
            // onChangeState={this.onChangeState}
            // ref={(el) => (this.flipBook = el)}
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