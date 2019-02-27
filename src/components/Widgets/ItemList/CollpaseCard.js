import React, {Component} from 'react';
import {CSSTransition} from "react-transition-group";
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia, Collapse,
    IconButton,
    Paper,
    Typography
} from "@material-ui/core";
import {ExpandMoreRounded} from "@material-ui/icons";
import Button from "./List";

class CollpaseCard extends Component {


    state={expanded:false}


     styles = theme => ({
        card: {
            maxWidth: 400,
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        actions: {
            display: 'flex',
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        }
    });




    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };




    render() {


        return (
            <CSSTransition key={this.props.index} classNames={{enter:"itemEnter",enterActive:"itemEntered",enterDone:"itemEnterDone",exit:"itemExit",exitActive:"itemExiting",exitDone:"itemExitDone" }} timeout={500}>
                <Paper className="mx-4 my-2">
                    <Card>
                        <CardActionArea>
                            <CardMedia title="Media Title"/>

                            <CardContent>
                                <Typography variant={"h6"} component={"h3"}>
                                    {this.props.items.title}
                                </Typography>
                            </CardContent>

                            <CardActions>
                                <IconButton
                                    onClick={this.handleExpandClick}
                                    aria-expanded={this.state.expanded}
                                    aria-label="Show more"
                                >
                                    <ExpandMoreRounded/>

                                </IconButton>
                            </CardActions>
                            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                                <CardContent>

                                    <Typography component={"p"}>
                                        {this.props.items.body}
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </CardActionArea>
                        <CardActions>
                            <Button color={"primary"} variant={"flat"}> Explore More</Button>
                        </CardActions>
                    </Card>
                </Paper>
            </CSSTransition>
        );
    }
}

export default CollpaseCard;