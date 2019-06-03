import * as React from "react";
import TileLayer from "ol/src/layer/Tile";
import { XYZ } from "ol/src/source";
import { Map, View } from "ol/src";
import "ol/src/ol.css"

interface Props {}

interface States {
    map: Map;
}

class MapContainer extends React.Component<Props, States> {
    mapDiv: React.RefObject<HTMLDivElement>;

    constructor(props: Props) {
        super(props);

        this.mapDiv = React.createRef();

        this.state = {
            map: new Map({
                layers: [
                    new TileLayer({
                        source: new XYZ({
                            url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                        })
                    })
                ],
                view: new View({
                    center: [0, 0],
                    zoom: 2
                })
            })
        }

    }

    componentDidMount() {
        const { map } = this.state;
        map.setTarget(this.mapDiv.current!);
    }


    render() {
        return (
            <div style={{ height: 500, width: '100%'}}>
                <div ref={this.mapDiv} style={{ height: '100%', width: '100%' }} />
            </div>
        );
    }
}


export default MapContainer;
