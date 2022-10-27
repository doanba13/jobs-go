import React from 'react'
import { Image, Text, View } from 'react-native-ui-lib';
import { Images, Location } from 'assets';
import { StyledButton } from 'screens/components';
import { useQuery } from 'react-query';
import { cvApi } from 'apis';
import { LoadingScreen } from 'components';
import { ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { setCv } from 'store/createCv';

export const CvDetail = ({
                             route,
                             navigation
                         }) => {
    const { id } = route.params;
    const dispatch = useDispatch();
    const {
        data,
        isLoading
    } = useQuery(['get-cv-detail', id], () => cvApi.getCvDetail(id))

    console.log(data)

    return (
        <>
            {isLoading ? <LoadingScreen/> : (
                <ScrollView>
                    <View backgroundColor={'#ffffff'} height={'100%'} paddingH-20>
                        <View paddingT-40 row centerV>
                            <Image source={Images.logo} height={80} width={80}/>
                            <View marginL-5>
                                <Text marginB-2 fs19 font-bold
                                      textBlack>{data.data.profile.fullname}</Text>
                                <Text marginT-2 fs14 font-medium
                                      black50>{data.data.profile.email}</Text>
                            </View>
                        </View>
                        <View row paddingH-30>
                            <View marginT-2 flex row center>
                                <Location/>
                                <Text marginL-5 marginB-2 fs12 textBlack
                                      textAlign={'center'}>{data.data.profile.phone}</Text>
                            </View>
                            <View marginT-2 flex row center>
                                <Location/>
                                <Text marginL-5 marginB-2 fs12 textBlack
                                      textAlign={'center'}>{data.data.profile.address}</Text>
                            </View>
                        </View>
                        <View marginT-20>
                            <Text fs19 textBlack font-bold>Education:</Text>
                            {data.data.education.map((edu, idx) => <EducationSection edu={edu} key={idx}/>)}
                        </View>
                        <View marginT-20>
                            <Text fs19 textBlack font-bold>Skill:</Text>
                            {data.data.skillrate.length ? data.data.skillrate.map((skill, idx) => <SkillSection
                                    skill={skill}
                                    key={idx}/>)
                                : <Text>No information</Text>
                            }
                        </View>
                        <View marginT-20>
                            <Text fs19 textBlack font-bold>Experience:</Text>
                            {data.data.experience.length ? data.data.experience.map((exp, idx) => <ExperienceSection
                                    exp={exp}
                                    key={idx}/>)
                                : <Text>No information</Text>
                            }
                        </View>
                        <View marginT-20>
                            <Text fs19 textBlack font-bold>Award:</Text>
                            {data.data.award.length ? data.data.award.map((awd, idx) => <AwardOrCertificationSection
                                    data={awd}
                                    key={idx}/>)
                                : <Text>No information</Text>
                            }
                        </View>
                        <View marginT-20>
                            <Text fs19 textBlack font-bold>Certification:</Text>
                            {data.data.certification.length ? data.data.certification.map((cert, idx) =>
                                    <AwardOrCertificationSection
                                        data={cert} key={idx}/>)
                                : <Text>No information</Text>
                            }
                        </View>
                        <View marginV-50>
                            <StyledButton
                                label={'Update CV'} bg={'#ffa39e'}
                                onPress={() => {
                                    dispatch(setCv(data.data));
                                    navigation.navigate('CreateCv', {
                                        type: 'update',
                                        id
                                    })
                                }}
                            />
                        </View>
                    </View>
                </ScrollView>
            )}
        </>
    )
}

const AwardOrCertificationSection = ({ data }) => {
    const {
        name,
        start
    } = data;
    return (
        <View marginT-5>
            <View row centerV marginT-7>
                <Text fs15 textBlack font-medium>Year earned: </Text>
                <Text fs15 textBlack font-light>{start}</Text>
            </View>
            <View centerV marginT-7>
                <Text fs15 textBlack font-medium>Name: </Text>
                <Text fs15 textBlack font-light>{name}</Text>
            </View>
        </View>
    )
}

const SkillSection = ({ skill }) => {
    const {
        title,
        description
    } = skill;
    return (
        <View marginT-5>
            <View row centerV marginT-7>
                <Text fs15 textBlack font-medium>Title: </Text>
                <Text fs15 textBlack font-light>{title}</Text>
            </View>
            <View centerV marginT-7>
                <Text fs15 textBlack font-medium>Description: </Text>
                <Text fs15 textBlack font-light>{description}</Text>
            </View>
        </View>
    )
}

const ExperienceSection = ({ exp }) => {
    const {
        start,
        end,
        company,
        position,
        description
    } = exp;
    return (
        <View marginT-5>
            <View row centerV marginT-7>
                <Text fs15 textBlack font-medium>Year: </Text>
                <Text fs15 textBlack font-light>{start} - {end}</Text>
            </View>
            <View row centerV marginT-7>
                <Text fs15 textBlack font-medium>Company: </Text>
                <Text fs15 textBlack font-light>{company}</Text>
            </View>
            <View row centerV marginT-7>
                <Text fs15 textBlack font-medium>Position: </Text>
                <Text fs15 textBlack font-light>{position}</Text>
            </View>
            <View centerV marginT-7>
                <Text fs15 textBlack font-medium>Description: </Text>
                <Text fs15 textBlack font-light>{description}</Text>
            </View>
        </View>
    )
}

const EducationSection = ({ edu }) => {
    const {
        start,
        end,
        school,
        majors,
        description
    } = edu;
    return (
        <View marginT-5>
            <View row centerV marginT-7>
                <Text fs15 textBlack font-medium>Year: </Text>
                <Text fs15 textBlack font-light>{start} - {end}</Text>
            </View>
            <View row centerV marginT-7>
                <Text fs15 textBlack font-medium>School: </Text>
                <Text fs15 textBlack font-light>{school}</Text>
            </View>
            <View row centerV marginT-7>
                <Text fs15 textBlack font-medium>Major: </Text>
                <Text fs15 textBlack font-light>{majors}</Text>
            </View>
            <View centerV marginT-7>
                <Text fs15 textBlack font-medium>Description: </Text>
                <Text fs15 textBlack font-light>{description}</Text>
            </View>
        </View>
    )
}
