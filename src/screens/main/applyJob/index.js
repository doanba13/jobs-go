import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native-ui-lib';
import { CvCard, ScreenLayout, StyledButton } from 'screens/components';
import { useMutation, useQuery } from 'react-query';
import { cvApi, jobApi } from 'apis';
import { LoadingScreen } from 'components';
import Modal from 'react-native-modal';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Close } from 'assets';
import Toast from 'react-native-simple-toast';

export const ApplyJob = ({
                             route,
                             navigation
                         }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [cvId, setCvId] = useState(-1);
    const { id: jobId } = route.params;

    const {
        data,
        error,
        mutate: applyJobHandler
    } = useMutation(jobApi.applyJob, {
        onSuccess: () => {
            Toast.show('Success!');
            setIsVisible(false);
            navigation.navigate('JobDetail', { id: jobId });
        }
    })

    const {
        data: resData,
        isLoading
    } = useQuery(['list-all-cv', jobId], cvApi.listAllCv);

    const onApplyJob = () => {
        const data = new FormData();
        data.append('job_id', jobId);
        data.append('cv_id', cvId);

        console.log(data)

        applyJobHandler(data)
    }

    return (
        <ScreenLayout title={'Your CV'} desc={'Select your CV to apply!'} contentHeight={'100%'} notFooter>
            <>
                <Modal isVisible={isVisible} animationIn={'slideInUp'} animationOut={'slideInDown'}>
                    <View paddingH-20 paddingV-25 spread style={styles.modalBody}>
                        <Text fs18 textBlack font-medium>Great! Do you want to apply now or take a look at
                            this CV?</Text>
                        <StyledButton
                            onPress={onApplyJob}
                            label={'Apply now'}
                            color={{ fontSize: 18 }}
                        />
                        <StyledButton
                            onPress={() => {
                                navigation.navigate('CvDetail', { id: cvId })
                                setIsVisible(false)
                            }}
                            label={'Take a look at this CV'}
                            bg={'#f6f6f6'}
                            color={{ fontSize: 18 }}
                        />
                        <TouchableOpacity
                            onPress={() => setIsVisible(false)}
                            style={{
                                position: 'absolute',
                                right: 10,
                                top: 10,
                                zIndex: 1,
                            }}
                        >
                            <Close/>
                        </TouchableOpacity>
                    </View>
                </Modal>
                <View paddingH-10>
                    {isLoading && <LoadingScreen/>}
                    {resData && resData.data.map(({
                                                      title,
                                                      data_cv_id
                                                  }) => <CvCard key={data_cv_id} title={title}
                                                                onPress={() => {
                                                                    setIsVisible(true)
                                                                    setCvId(data_cv_id)
                                                                }}/>)}
                </View>
            </>
        </ScreenLayout>
    )
}

const styles = StyleSheet.create({
    modalBody: {
        position: 'relative',
        backgroundColor: '#fff',
        borderRadius: 15
    }
})
