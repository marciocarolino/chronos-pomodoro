import { Container } from '../../components/Container';
import { GenericHtml } from '../../components/GenericHtml';
import { Heading } from '../../components/Heading';
import { MainTemplates } from '../../templates/MainTemplate';

export function AboutPomodoro() {
  return (
    <>
      <MainTemplates>
        <Container>
        <GenericHtml>
          <Heading> A Técnica Pomodoro</Heading>
          
        </GenericHtml>
        </Container>
      </MainTemplates>
    </>
  );
}
