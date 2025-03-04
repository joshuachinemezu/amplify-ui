import * as React from 'react';
import {
  RadioGroupFieldProps,
  SelectField,
  Flex,
  TextField,
  SwitchField,
} from '@aws-amplify/ui-react';

export interface RadioGroupFieldPropControlsProps extends RadioGroupFieldProps {
  setDirection: (
    value: React.SetStateAction<RadioGroupFieldProps['direction']>
  ) => void;
  setIsDisabled: (
    value: React.SetStateAction<RadioGroupFieldProps['isDisabled']>
  ) => void;
  setVariation: (
    value: React.SetStateAction<RadioGroupFieldProps['variation']>
  ) => void;
  setLegend: (
    value: React.SetStateAction<RadioGroupFieldProps['legend']>
  ) => void;
  setSize: (value: React.SetStateAction<RadioGroupFieldProps['size']>) => void;
  setLabelPosition: (
    value: React.SetStateAction<RadioGroupFieldProps['labelPosition']>
  ) => void;
}

interface RadioGroupFieldPropControlsInterface {
  (props: RadioGroupFieldPropControlsProps): React.JSX.Element;
}

export const RadioGroupFieldPropControls: RadioGroupFieldPropControlsInterface =
  ({
    setDirection,
    setIsDisabled,
    setLegend,
    setSize,
    setLabelPosition,
    setVariation,
    isDisabled,
    legend,
    labelPosition,
    variation,
  }) => {
    return (
      <Flex direction="column">
        <TextField
          id="legend"
          name="legend"
          label="legend"
          value={legend as string}
          onChange={(event) => {
            setLegend(event.target.value as RadioGroupFieldProps['legend']);
          }}
        />

        <SelectField
          id="labelPosition"
          name="labelPosition"
          label="labelPosition"
          placeholder="default"
          value={labelPosition}
          onChange={(e) =>
            setLabelPosition(
              e.target.value as RadioGroupFieldProps['labelPosition']
            )
          }
        >
          <option value="start">start</option>
          <option value="end">end</option>
          <option value="top">top</option>
          <option value="bottom">bottom</option>
        </SelectField>

        <SelectField
          label="variation"
          name="variation"
          value={variation}
          onChange={(event) =>
            setVariation(
              event.target.value as RadioGroupFieldProps['variation']
            )
          }
        >
          <option value="plain">plain (default)</option>
          <option value="outlined">outlined</option>
        </SelectField>

        <SelectField
          label="direction"
          name="direction"
          onChange={(event) =>
            setDirection(
              event.target.value as RadioGroupFieldProps['direction']
            )
          }
        >
          <option value="column">column</option>
          <option value="row">row</option>
        </SelectField>

        <SelectField
          label="size"
          name="size"
          placeholder="default"
          onChange={(event) =>
            setSize(event.target.value as RadioGroupFieldProps['size'])
          }
        >
          <option value="small">small</option>
          <option value="large">large</option>
        </SelectField>

        <SwitchField
          id="isDiabled"
          label="isDisabled"
          name="isDisabled"
          isChecked={isDisabled}
          onChange={(event) => {
            setIsDisabled(
              Boolean(
                event.target.checked
              ) as RadioGroupFieldProps['isDisabled']
            );
          }}
        />
      </Flex>
    );
  };
