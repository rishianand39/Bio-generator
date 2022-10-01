import styled from "styled-components";

const Container = styled.div`
  width: 60vw;
  margin: auto;
`;


// EACH ROW WRAPPER
const RowWrapper = styled.div`
  background-color: #bac3be;
  margin: 40px 0;
  padding: 10px 15px;
  font-size: ${(props) => props.heading === "heading" && "1.6rem"};
  font-weight: ${(props) => props.heading === "heading" && "bold"};
  display: ${(props) => props.heading === "heading" && "flex"};
  justify-content: ${(props) => props.heading === "heading" && "center"};
  align-items: ${(props) => props.heading === "heading" && "center"};
`;


const Label = styled.label``;
const Input = styled.input`
  margin:  5px 5px;
`;

const Select = styled.select`
  margin:  10px;
`;
const Options = styled.option``;

const TextArea = styled.textarea`
  margin:  5px 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    
`;

// RANDOM BUTTON
const Btn = styled.button`
margin: 5px 5px;
`;

const Home = () => {
  return (
    <Container>
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
        <Input id="major"/>
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
        <Btn>Restoration</Btn>
        <Btn>Plan of Salvation</Btn>
        <Btn>Gospel of Christ</Btn>
        <Btn>Law of Chastity</Btn>
        <Btn>Word of Wisdom</Btn>
        <Btn>Any Lesson</Btn>
      </RowWrapper>
    </Container>
  );
};

export default Home;
