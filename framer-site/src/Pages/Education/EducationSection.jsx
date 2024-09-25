import "./educationSection.scss"
import Timeline from "@material-ui/lab/Timeline"
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { educationDetails } from "../../utils/constant";
import TimeLineContent from "../../Components/TimeLineContent";
import { useMediaQuery } from "@material-ui/core";

function EducationSection(){
    
    const switchAlign=useMediaQuery("(min-width:1025px)")
    
    return(
        <div className="education-container">
            <div className="education-header">
                <h1>Education</h1>
            </div>
            <Timeline align={switchAlign ? "alternate" : "left"} className="timeline-component">
                {educationDetails.map((eductaionDetail,index)=><TimelineItem key={eductaionDetail.id} className="timeline-item">
                    <TimelineSeparator>
                    <TimelineDot className="timeline-dot" children={<img src={eductaionDetail.logo} alt={eductaionDetail.name}/>}/>
                    <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent style={{display:"flex",justifyContent:index%2!=0 ? "flex-end" : ""}}>
                        <TimeLineContent index={index} {...eductaionDetail}></TimeLineContent>
                    </TimelineContent>
                </TimelineItem>)}
                <div className="finishing-dot-container">
                    <TimelineDot className="finishing-dot"/>
                </div>
            </Timeline>
        </div>
    )
}

export default EducationSection