import { Carousel, WingBlank,WhiteSpace } from 'antd-mobile';

class MenuCarousel extends React.Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
    }

    componentDidMount() {
        // simulate img loading
        // setTimeout(() => {
        //     this.setState({
        //         data: this.props.advData
        //     });
        // }, 100);
    }

    componentWillReceiveProps(advData) {
        this.setState({
            data: this.props.advData
        });
    }

    render() {
        return (
            <WingBlank>
                    <Carousel
                        autoplay={true}
                        infinite
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                    >
                    {
                        this.state.data.map(item => (
                            <a
                                key={item.id}
                                href={item.src}
                                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                                <img
                                    src={item.imagin}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            </a>
                        ))
                    }
                </Carousel>
            </WingBlank>
        );
    }
}

export  default MenuCarousel;