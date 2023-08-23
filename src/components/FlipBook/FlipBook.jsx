import HTMLFlipBook from 'react-pageflip';
import React from 'react';
import './FlipBook.css'

const Page = React.forwardRef((props, ref) => {
    return (
        <div className="demoPage" ref={ref}>
            <img className='blue-print' src="blue-print.png"></img>
            {/* <h1>Page Header</h1>
            <p>{props.children}</p> */}
            <p>Page number: {props.number}</p>
        </div>
    );
});

function FlipBook(props) {
    return (
        <HTMLFlipBook
            width={550}
            height={733}
            size="stretch"
            minWidth={315}
            maxWidth={1000}
            minHeight={400}
            maxHeight={1533}
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