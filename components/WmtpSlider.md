This is an example of our slider component:

    var React = require('react')

    class Slider extends React.Component {

        constructor(props){
            super(props)
            this.state = {
                sliderValue: 50
            }
        }

        handleChange(event, value) {
            this.setState({sliderValue: value})
        }

        render(){
            return(
                <WmtpSlider
                    lowerTag={"Relaxed"}
                    upperTag={"Anxious"}
                    title="Anxiety"
                    value={this.state.sliderValue}
                    handleChange={this.handleChange.bind(this)}
                />
            )
        }
    }

    <Slider />

