import styled from 'styled-components';
import React, { useRef, useState, useEffect, useMemo } from 'react';
import { Form, Field } from 'react-final-form';
import { Button } from './components/Buttons';
import { Input } from './components/FormControl';
import FormGroup from './components/FormGroup';
import { Container, Row, Col } from './components/GridSystem';
import HorizontalForm from './components/HorizontalForm';
import Label from './components/Label';

const required = value => (value ? undefined : 'Required field.')

const FinalFormTest = ({ fieldCount = 0, onSubmit }) => {
    const refCount = useRef(0);
    const inputValues = React.useRef({});
    const dispInputValues = React.useRef(null);
    const keys = [...Array(fieldCount).keys()]
        .map(n => n + 1);
    const handleSubmit = React.useCallback(() => {
        onSubmit(inputValues.current);
    });

    return (
        <Container fluid style={{ padding: '1rem 1.5rem' }}>
            <Form
                onSubmit={handleSubmit}
                render={({ form }) => (
                    <Row>
                        <Col style={{ paddingRight: '1rem' }}>
                            <h2>React Final Form Performance Optimization</h2>
                            <p>Click <strong>Reset</strong> and input something for the first 10 text fields (marked as required). Your goal is to minimze the form render count without exceeding 2 renders for a successful form submission. So each time you make change to a text field, it will not rerender the whole form on every change.</p>
                            <FormGroup>
                                <strong>Form fields:</strong> {fieldCount}
                            </FormGroup>
                            <FormGroup>
                                <strong>Form render count:</strong> {++refCount.current}
                            </FormGroup>
                            <FormGroup>
                                <Button
                                    btnStyle="primary"
                                    onClick={handleSubmit}
                                >
                                    Submit
                                </Button>
                                <Button
                                    btnStyle="default"
                                    onClick={() => {
                                        form.reset();
                                        refCount.current = 0;
                                    }}
                                >
                                    Reset
                                </Button>
                            </FormGroup>
                            <Preview>
                                <span ref={dispInputValues} />
                            </Preview>
                        </Col>
                        <Col style={{ maxHeight: 'calc(100vh - 2rem)', overflowY: 'auto' }}>
                            <HorizontalForm spacing={['.75rem', '.5rem']}>
                                {({ FormContainer, FormRow, FormCol }) => (
                                    <FormContainer style={{ width: '100%' }}>
                                        {keys.map((key, index) => {
                                            const isRequiredField = (index < 10);
                                            const placeholder = isRequiredField ? 'Required field' : 'Optional field';

                                            return (
                                                <Field
                                                    name={`field${key}`}
                                                    key={key}
                                                >
                                                    {({ input, meta }) => {
                                                        const [value, setValue] = useState(input.value);
                                                        const [touched, setTouched] = useState(meta.touched);
                                                        const error = useMemo(() => {
                                                            return isRequiredField ? required(value) : null;
                                                        }, [value, touched]);
                                                        useEffect(() => {
                                                            let updateValues = { ...inputValues.current };
                                                            updateValues[input.name] = value;
                                                            for (let key in updateValues) {
                                                                if (updateValues[key] === '') {
                                                                    delete updateValues[key];
                                                                }
                                                            }
                                                            inputValues.current = updateValues;
                                                            dispInputValues.current.innerHTML = JSON.stringify(updateValues, 0, 2);
                                                        }, [value]);

                                                        return (
                                                            <FormRow>
                                                                <FormCol style={{ width: '1%', whiteSpace: 'nowrap' }}>
                                                                    <Label required={isRequiredField}>
                                                                        Field {key}
                                                                    </Label>
                                                                </FormCol>
                                                                <FormCol>
                                                                    <Input
                                                                        type="text"
                                                                        name={input.name}
                                                                        onBlur={() => setTouched(true)}
                                                                        onChange={e => setValue(e.target.value)}
                                                                        value={value}
                                                                        placeholder={placeholder}
                                                                    />
                                                                    {error && touched && <FieldError>{error}</FieldError>}
                                                                </FormCol>
                                                            </FormRow>
                                                        );
                                                    }}
                                                </Field>
                                            );
                                        })}
                                    </FormContainer>
                                )}
                            </HorizontalForm>
                        </Col>
                    </Row>
                )}
            />
        </Container>
    );
};

export default FinalFormTest;

const FieldError = styled.div`
    color: #db3d44;
`;

const Preview = styled.pre`
    background-color: #f7f8f9;
    padding: .75rem 1rem;
`;
