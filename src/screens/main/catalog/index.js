import React from 'react';
import { ScreenLayout } from 'screens/components';
import { GridList, Text, View } from 'react-native-ui-lib';
import { boxWithShadow } from 'utilities/boxShadow';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { randomCatalog } from 'utilities';
import { useQuery } from 'react-query';
import { catalogApi } from 'apis/catalogApi';
import { LoadingScreen } from 'components';

const data = [
    {
        id: 1,
        title: 'UX/UI Designer',
        jobCount: 124
    },
    {
        id: 2,
        title: 'Web Develop',
        jobCount: 26
    },
    {
        id: 3,
        title: 'Software Engineer Engineer',
        jobCount: 48
    },
    {
        id: 4,
        title: 'Accountant',
        jobCount: 100
    },
    {
        id: 5,
        title: 'Consultor',
        jobCount: 74
    },
    {
        id: 5,
        title: 'Consultor',
        jobCount: 74
    },
]

export const Catalog = () => {
    const {
        isLoading,
        data: dataRes
    } = useQuery(['catalog'], catalogApi.getCatalog)
    console.log(dataRes)

    return (
        <ScreenLayout title={'Catalog'} desc={'Hey! lets discover our job catalogs'} notFooter contentHeight={'100%'}>
            {isLoading ? <LoadingScreen/>
                : <View paddingV-20>
                    <GridList
                        contentContainerStyle={{
                            paddingBottom: 20,
                            paddingTop: 10
                        }}
                        data={data}
                        renderItem={({ item }) => (
                            <TouchableWithoutFeedback key={item.id}>
                                <CatalogCard title={item.title} jobCount={item.jobCount}/>
                            </TouchableWithoutFeedback>
                        )}
                        numColumns={2}
                        itemSpacing={10}
                        listPadding={10}
                        keepItemSize={true}
                    />
                </View>
            }
        </ScreenLayout>
    )
}

const CatalogCard = (
    {
        title,
        jobCount
    }
) => {
    const Icon = randomCatalog();

    return (
        <View row centerV style={styles.container}>
            <Icon/>
            <View marginL-6>
                <Text textBlack font-bold>{title}</Text>
                <Text fs12 black50>{jobCount}+ jobs</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            padding: 10,
            width:
                '100%',
            backgroundColor:
                '#f9f9f9',
            ...boxWithShadow,
            elevation:
                12,
            borderRadius:
                12,
        },
    }
)
