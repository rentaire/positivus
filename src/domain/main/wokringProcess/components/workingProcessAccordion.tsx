import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui-entities/accordion/accordion.tsx';

export interface ProcessAccordionProps {
  value: string;
  title: string;
  text: string;
}

export function WorkingProcessAccordion(props: ProcessAccordionProps) {
  const normalizedCount = (count: string) => {
    return count.length === 1 ? `0${count}` : count;
  };

  return (
    <Accordion type={'multiple'}>
      <AccordionItem value={props.value}>
        <AccordionTrigger>
          <div className={'768:gap-x-7 flex items-center gap-x-5'}>
            <p className={'768:!text-[60px] h3'}>{normalizedCount(props.value)}</p>
            <p className={'768:!text-[30px] h4'}>{props.title}</p>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <p className={'h4'}>{props.text}</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
