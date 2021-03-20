import React, {createRef} from 'react'
import './App.css';

class App extends React.Component {
    state = {
        isPopupVisible: false,
        popupPosition: 'left'
    }

    constructor() {
        super();
        this.containerRef = createRef()

        this.handleMouseEnter = this.handleMouseEnter.bind(this)
        this.handleMouseLeave = this.handleMouseLeave.bind(this)
    }

    componentDidMount() {

    }

    handleMouseEnter(event) {
        const { x, y, width, height } = this.containerRef.current.getBoundingClientRect()
        this.setState({
            isPopupVisible: true,
            targetX: x,
            targetY: y,
            targetWidth: width,
            targetHeight: height
        })
    }

    handleMouseLeave(event) {
        this.setState({
            isPopupVisible: false
        })
    }

    render() {
        const { isPopupVisible, targetX, targetY, targetHeight, targetWidth, popupPosition } = this.state

        const popupStyle = {
            position: 'absolute',
            width: '100px',
            height: '100px',
            background: 'black',
            transform: 'translateY(-50%)'
        }
        if(popupPosition === 'left') {
            popupStyle.top = `${targetY + targetHeight/2}px`
            popupStyle.left = `${targetX - 20}px`
            popupStyle.transform = 'translate(-100%, -50%)'
        } else if(popupPosition === 'right') {
            popupStyle.top = `${targetY + targetHeight/2}px`
            popupStyle.left = `${targetX + targetWidth + 20}px`
        }

        return (
            <div className="App">
                <div
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}
                    className="suqare"
                    ref={this.containerRef}
                >

                </div>

                {
                    isPopupVisible && (
                        <div style={popupStyle}>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default App;
