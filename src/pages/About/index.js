import React from 'react'

import MainContent from '../../components/layout/MainContent';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import mikeImg from './mike.jpg';
import lisaImg from './lisa.jpg';
import Bio from './Bio';


const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
});

const About = ({classes}) => (
  <MainContent title="Who are the Builders">
    <Paper className={classes.root} elevation={4}>
      <Bio name="Mike Heijmans" avatar={mikeImg}>
        <Typography variant='body1'>
          When Mike was 7 he was inspired by an ultralight he saw flying
          while on a roadtrip with his family. He set to work drawing up plans
          and knew that one day he would build his own flying machine.
        </Typography>
        <br/>
        <Typography variant='body1'>
          As a pilot, the fire to build a flying machine has been stoked into an
          inferno. Mike longs for the convenience of his own airplane without worrying
          about schedules, coordination with other club members, rental airplane
          maintenance problems, and getting the airplane back "on time".
        </Typography>
        <br/>
        <Typography variant='body1'>
          After careful consideration and looking at hundreds of used (and new)
          airplanes for sale, Mike decided that his 7-year-old self was on to
          something. Why not build the airplane? So after more research and countless
          hours of watching review videos on youtube and reading about all the
          possible kits out there, it was decided that the Van's RV10 would be
          the perfect airplane for the Heijmans family.
        </Typography>
        <br/>
        <Typography variant='body1'>
          Mike has been a builder his whole life. He creates things and enjoys
          the challenge of all things technical. In his professional life, Mike
          solves complex software problems and builds custom solutions. In his
          free time, Mike also enjoys maintaining and contributing to open source
          software projects. He also builds animatronic Halloween props with his
          wife and loves creating all manners of art.
        </Typography>
      </Bio>
      <hr/>
      <Bio name="Lisa Heijmans" avatar={lisaImg}>
        <Typography variant='body1'>
          Lisa loves making things and has since she was a little girl. When Mike
          told her he wanted to build a airplane, she was apprhensive about the
          scale of the task but agreed it would be fun.
        </Typography>
        <br/>
        <Typography variant="body1">
          Since Lisa is the most awesome wife in the universe, she agreed to help
          and make it happen. She's a big part of the success of this build and
          can be found in the shop riveting and fabricating parts.
        </Typography>
      </Bio>
      <div style={{clear: 'both'}}/>
    </Paper>
  </MainContent>
)
export default withStyles(styles)(About);
