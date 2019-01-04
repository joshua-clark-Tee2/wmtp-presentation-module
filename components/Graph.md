This is an example of our Graph component:

    var React = require('react')

    class ExampleGraph extends React.Component {

        constructor(props){
            super(props)
            this.state = {
                data: [{date: "12/20/2018", Anxiety: 74, Depression: 86},
                       {date: "12/21/2018", Anxiety: 88, Depression: 20},
                       {date: "12/22/2018", Anxiety: 4, Depression: 31},
                       {date: "12/26/2018", Anxiety: 71, Depression: 24},
                       {date: "12/27/2018", Anxiety: 50, Depression: 50}]
            }
        }

        handleChange(event, value) {
            this.setState({sliderValue: value})
        }

        render(){
            return(
                <Graph
                    data={this.state.data}
                    title="Mood Tracker"
                    dataKey="date"
                    dataLines={[
                    {
                        "dataName":"Anxiety",
                        "lineName":"Anxiety Level",
                        "strokeColor":"#0000cc"
                    },
                    {
                        "dataName":"Depression",
                        "lineName":"Depression Level",
                        "strokeColor":"#ff0800"
                    }]}

                />
            )
        }
    }

    <ExampleGraph />