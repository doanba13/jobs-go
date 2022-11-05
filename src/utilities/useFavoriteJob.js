import { useMutation, useQuery } from 'react-query';
import { jobApi } from 'apis';
import { useEffect, useState } from 'react';
import Toast from 'react-native-simple-toast';
import { queryClient } from 'libs';

const isInArray = (value, array) => array.indexOf(value) > -1;

export const useFavoriteJob = (id) => {
    const [listCv, setListCv] = useState([]);
    const [isFav, setIsFav] = useState(false);

    useEffect(async () => {
        const dataTmp = await jobApi.getFavoriteJob();
        setListCv(dataTmp)
    }, [])

    useEffect(() => {
        if (!listCv) return;
        const listCvId = listCv.map(el => el.id);
        setIsFav(isInArray(id, listCvId));
    }, [listCv])

    const {
        data: favRes,
        mutate: favoriteHandler
    } = useMutation(jobApi.favoriteJob);

    const {
        data: unFavRes,
        mutate: unFavoriteHandler
    } = useMutation(jobApi.unFavoriteJob);

    useEffect(() => {
        if (favRes) Toast.show('❤️👌😁');
        setIsFav(true);
        queryClient.refetchQueries('favorite-job')
    }, [favRes])

    useEffect(() => {
        if (unFavRes) Toast.show('😢👌💔');
        setIsFav(false);
        queryClient.refetchQueries('favorite-job')
    }, [unFavRes])

    const onFavoriteClick = () => {
        isFav ? unFavoriteHandler(id) : favoriteHandler(id);
    }

    return {
        onFavoriteClick,
        isFav
    }
}
