import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 70vw;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
`;

// EACH ROW WRAPPER
const RowWrapper = styled.div`
  background-color: #bac3be;
  margin: 30px 0;
  padding: 10px 15px;
  font-size: ${(props) => props.heading === "heading" && "1.6rem"};
  font-weight: ${(props) => props.heading === "heading" && "bold"};
  display: ${(props) => props.heading === "heading" && "flex"};
  justify-content: ${(props) => props.heading === "heading" && "center"};
  align-items: ${(props) => props.heading === "heading" && "center"};
`;

const Label = styled.label``;
const Input = styled.input`
  margin: 5px 5px;
`;

const Select = styled.select`
  margin: 10px;
`;
const Options = styled.option``;

const TextArea = styled.textarea`
  margin: 5px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// RANDOM BUTTON
const Btn = styled.button`
  margin: 5px 5px;
  border: 1px solid black;
  background-color: ${(props) => props.bg && props.bg};
  &:active {
    background-color: white;
  }
`;

const Wrapper = styled.div`
  flex: ${(props) => props.flex && props.flex};
  min-width: 400px;
  padding: 0 10px;
`;
const Result = styled.p`
  padding: 15px;
  font-size: 1.2rem;
  background-color: #bac3be;
`;
const Home = () => {
  const [data, setData] = useState({
    Name: ["Amanda", "Hannah", "Rachel", "Josh", "Maggie", "Taylor"],
    Location: ["Mumbai", "NaviMumbai", "bangluru", "hydrabad", "chennai"],
    School: [
      "BYU",
      "the University of Utah",
      "Utah State",
      "UVU",
      "Utah State",
    ],
    Major: [
      "Animation",
      "Family Science",
      "Math Education",
      "Information Technology",
      "Communication Disorders",
    ],
    Occupation: [
      "journalist for a local newspaper",
      "TA at [PossessivePronoun] school",
      "journalist for a local newspaper",
      "civil Engineer",
      "web developer",
    ],
    ReligiousBackgrpund: [
      "atheist, and has no experience with spiritual things",
      "Catholic",
      "in a nontraditional family thatwas very focused on spirituality and connecting with the inner being through meditation and nature",
      "Catholic but would consider [ObjectPronoun]self to be agnostic right now",
      "never discussing religion in [PossessivePronoun] home",
    ],
    ReasonForMeeting: [
      "often worries that God is disappointed in [ObjectPronoun] for not following him better and wants to know how to change",
      "really enjoyed [PossessivePronoun] first meeting with the missionaries (the Restoration) and felt good about the Book of Mormon when [SubjectPronoun] prayed about it",
      "is looking to develop a more personal relationship with God",
      "harbors feelings of resentment towards God because of difficult trials in [PossessivePronoun] life, but is willing to give religion and spirituality another try",
    ],
  });
  
  return (
    <Container>
      <Wrapper flex="6">
        <RowWrapper heading="heading">Options</RowWrapper>
        {/* NAME */}
        <RowWrapper>
          <Label htmlFor="name">Name</Label>
          <Input id="name" />
          {/* GENDER */}
          <Label>Gender</Label>
          <Select>
            <Options>Male</Options>
            <Options>Female</Options>
          </Select>
          <Btn>Random Name</Btn>
        </RowWrapper>
        {/* LOCATION */}
        <RowWrapper>
          <Input type="checkbox" />
          <Label htmlFor="location">Location</Label>
          <Input />
          <Btn>Random Location</Btn>
        </RowWrapper>
        {/* SCHOOL */}
        <RowWrapper>
          <Input type="checkbox" />
          <Label htmlFor="school">School</Label>
          <Input />
          <Btn>Random School</Btn>
          <br />
          {/* MAJOR */}
          <Label htmlFor="major">Major</Label>
          <Input id="major" />
          <Btn>Random Major</Btn>
        </RowWrapper>
        {/* OCCUPATION */}
        <RowWrapper>
          <Input type="checkbox" />
          <Label htmlFor="occupation">Occupation</Label>
          <Input />
          <Btn>Random Occupation</Btn>
        </RowWrapper>
        {/* RELIGIOUS BACKGROUND */}
        <RowWrapper>
          <Input type="checkbox" />
          <Label htmlFor="religion">Religious Background</Label>
          <TextArea rows="5" cols="55" />
          <Btn>Random Religion</Btn>
        </RowWrapper>
        {/* REASON FOR METTING */}
        <RowWrapper>
          <Input type="checkbox" />
          <Label htmlFor="religion">Reason for metting with missionaries</Label>
          <TextArea rows="5" cols="55" />
          <Btn bg="#d3bca2">Restoration</Btn>
          <Btn bg="#aed5af">Plan of Salvation</Btn>
          <Btn bg="#aeb0d4">Gospel of Christ</Btn>
          <Btn bg="#e0b0bb">Law of Chastity</Btn>
          <Btn bg="#c7a3c8">Word of Wisdom</Btn>
          <Btn bg="#d0d3d1">Any Lesson</Btn>
        </RowWrapper>
      </Wrapper>
      <Wrapper flex="4">
        <RowWrapper heading="heading">Results</RowWrapper>
        <Result>
          {data.Name[0]} is from &nbsp; 
          {data.Location[0]}. He is studying to be a &nbsp; 
          {data.Major[0]} at&nbsp;.
          {data.School[0]}. He currently works as a &nbsp; 
          {data.Occupation[0]}&nbsp;.
          He was raised&nbsp; 
          {data.ReligiousBackgrpund[0]}. He&nbsp; 
          {data.ReasonForMeeting[0]}
        </Result>
      </Wrapper>
    </Container>
  );
};

export default Home;
