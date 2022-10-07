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
  width: 100%;
  height: 70px;
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
  // RANDOM BUTTON DATA HERE
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
    ReligiousBackground: [
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

  // INDEX MAINTAINANCE HERE
  const [indexes, setIndexes] = useState({
    Name: 0,
    Location: 0,
    School: 0,
    Major: 0,
    Occupation: 0,
    ReligiousBackground: 0,
    ReasonForMeeting: 0,
  });
  const [inputData, setInputData] = useState({
    Name: data.Name[indexes["Name"]],
    Location: data.Location[indexes["Location"]],
    School: data.School[indexes["School"]],
    Major: data.Major[indexes["Major"]],
    Occupation: data.Occupation[indexes["Occupation"]],
    ReligiousBackground:data.ReligiousBackground[indexes["ReligiousBackground"]],
    ReasonForMeeting: data.ReasonForMeeting[indexes["ReasonForMeeting"]],
  });

  // RANDOM BUTTON LOGIC HERE
  const handleRandomBtn = (a, b) => {
    console.log(a, indexes[a]);
    setIndexes({
      ...indexes,
      [a]:indexes[a]===data[a].length-1?0: ++indexes[a],
    });
    setInputData({
      ...inputData,
      [a]: data[a][indexes[a]],
    });
  };


  //  HANDLING INPUT BOX HERE
  const handleInput = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };
  const handleGender = () => {};

  return (
    <Container>
      {/* FORM SECTION  */}
      <Wrapper flex="6">
        <RowWrapper heading="heading">Options</RowWrapper>
        {/* NAME */}
        <RowWrapper>
          <Label htmlFor="name">Name</Label>
          <Input
            name="Name"
            id="name"
            value={inputData["Name"]}
            onChange={handleInput}
          />
          {/* GENDER */}
          <Label>Gender</Label>
          <Select name="Gender" onChange={handleGender}>
            <Options value="male">Male</Options>
            <Options value="female">Female</Options>
          </Select>
          <Btn onClick={() => handleRandomBtn("Name")}>Random Name</Btn>
        </RowWrapper>
        {/* LOCATION */}
        <RowWrapper>
          <Input type="checkbox" defaultChecked={true} />
          <Label htmlFor="location">Location</Label>
          <Input
            name="Location"
            value={inputData["Location"]}
            onChange={handleInput}
          />
          <Btn onClick={() => handleRandomBtn("Location")}>Random Location</Btn>
        </RowWrapper>
        {/* SCHOOL */}
        <RowWrapper>
          <Input type="checkbox" defaultChecked={true} />
          <Label htmlFor="school">School</Label>
          <Input
            name="School"
            value={inputData["School"]}
            onChange={handleInput}
          />
          <Btn onClick={() => handleRandomBtn("School")}>Random School</Btn>
          <br />
          {/* MAJOR */}
          <Label htmlFor="major">Major</Label>
          <Input
            name="Major"
            id="major"
            value={inputData["Major"]}
            onChange={handleInput}
          />
          <Btn onClick={() => handleRandomBtn("Major")}>Random Major</Btn>
        </RowWrapper>
        {/* OCCUPATION */}
        <RowWrapper>
          <Input type="checkbox" defaultChecked={true} />
          <Label htmlFor="occupation">Occupation</Label>
          <Input
            name="Occupation"
            value={inputData["Occupation"]}
            onChange={handleInput}
          />
          <Btn onClick={() => handleRandomBtn("Occupation")}>
            Random Occupation
          </Btn>
        </RowWrapper>
        {/* RELIGIOUS BACKGROUND */}
        <RowWrapper>
          <Input type="checkbox" defaultChecked={true} />
          <Label htmlFor="religion">Religious Background</Label>
          <TextArea
            name="ReligiousBackground"
            value={inputData["ReligiousBackground"]}
            onChange={handleInput}
          />
          <Btn onClick={() => handleRandomBtn("ReligiousBackground")}>
            Random Religion
          </Btn>
        </RowWrapper>
        {/* REASON FOR METTING */}
        <RowWrapper>
          <Input type="checkbox" defaultChecked={true} />
          <Label htmlFor="religion">Reason for metting with missionaries</Label>
          <TextArea
            name="ReasonForMeeting"
            value={inputData["ReasonForMeeting"]}
            onChange={handleInput}
          />
          <Btn
            bg="#d3bca2"
            onClick={() => handleRandomBtn("ReasonForMeeting", "Restoration")}
          >
            Restoration
          </Btn>
          <Btn
            bg="#aed5af"
            onClick={() =>
              handleRandomBtn("ReasonForMeeting", "Plan of Salvation")
            }
          >
            Plan of Salvation
          </Btn>
          <Btn
            bg="#aeb0d4"
            onClick={() =>
              handleRandomBtn("ReasonForMeeting", "Gospel of Christ")
            }
          >
            Gospel of Christ
          </Btn>
          <Btn
            bg="#e0b0bb"
            onClick={() =>
              handleRandomBtn("ReasonForMeeting", "Law of Chastity")
            }
          >
            Law of Chastity
          </Btn>
          <Btn
            bg="#c7a3c8"
            onClick={() =>
              handleRandomBtn("ReasonForMeeting", "Word of Wisdom")
            }
          >
            Word of Wisdom
          </Btn>
          <Btn
            bg="#d0d3d1"
            onClick={() => handleRandomBtn("ReasonForMeeting", "Any Lesson")}
          >
            Any Lesson
          </Btn>
        </RowWrapper>
      </Wrapper>
      {/* RESULT SECTION  */}
      <Wrapper flex="4">
        <RowWrapper heading="heading">Results</RowWrapper>
        <Result>
          {inputData["Name"]} is from &nbsp;
          {inputData["Location"]}. He is studying to be a &nbsp;
          {inputData["Major"]} at&nbsp;.
          {inputData["School"]}. He currently works as a &nbsp;
          {inputData["Occupation"]}&nbsp;. He was raised&nbsp;
          {inputData["ReligiousBackground"]}. He&nbsp;
          {inputData["ReasonForMeeting"]}.
        </Result>
      </Wrapper>
    </Container>
  );
};

export default Home;
