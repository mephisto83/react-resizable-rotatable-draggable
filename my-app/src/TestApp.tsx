import React, { Component } from 'react'
import ResizableRect from './components/rotator'
import logo from './logo.svg';

class TestApp extends Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            width: 100,
            height: 100,
            top: 100,
            left: 100,
            rotateAngle: 0
        }
    }

    handleResize = (style: any, isShiftKey: any, type: any) => {
        // type is a string and it shows which resize-handler you clicked
        // e.g. if you clicked top-right handler, then type is 'tr'
        let { top, left, width, height } = style
        top = Math.round(top)
        left = Math.round(left)
        width = Math.round(width)
        height = Math.round(height)
        this.setState({
            top,
            left,
            width,
            height
        })
    }

    handleRotate = (rotateAngle: any) => {
        this.setState({
            rotateAngle
        })
    }

    handleDrag = (deltaX: any, deltaY: any) => {
        this.setState({
            left: this.state.left + deltaX,
            top: this.state.top + deltaY
        })
    }

    render() {
        const { width, top, left, height, rotateAngle } = this.state
        return (
            <div className="App">
                <ResizableRect
                    left={left}
                    top={top}
                    width={width}
                    height={height}
                    rotateAngle={rotateAngle}
                    // aspectRatio={false}
                    // minWidth={10}
                    // minHeight={10}
                    zoomable='n, w, s, e, nw, ne, se, sw'
                    // rotatable={true}
                    // onRotateStart={this.handleRotateStart}
                    onRotate={this.handleRotate}
                    // onRotateEnd={this.handleRotateEnd}
                    // onResizeStart={this.handleResizeStart}
                    onResize={this.handleResize}
                    // onResizeEnd={this.handleUp}
                    // onDragStart={this.handleDragStart}
                    onDrag={this.handleDrag}
                // onDragEnd={this.handleDragEnd}
                >
                    <img src={logo}
                        className="App-logo"
                        alt="logo"
                        unselectable='on'
                        style={{
                            ['-moz-user-select']: 'none',
                            ['-webkit-user-select']: 'none',
                            ['userSelect']: 'none',
                            position: 'relative',
                            height: '100%',
                            width: '100%',
                            pointerEvents: 'none'
                        } as any} />
                </ResizableRect>
            </div>
        )
    }
}

export default TestApp