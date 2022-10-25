import { createSlice } from '@reduxjs/toolkit';

const initialCv = {
    global: '',
    profile: {},
    education_meta: 'Học Vấn',
    education: [],
    experience_meta: 'Kinh nghiệm',
    experience: [],
    certification_meta: 'Chứng chỉ',
    certification: [],
    award_meta: 'Thành tích',
    award: [],
    skillrate_meta: 'Kĩ năng',
    skillrate: []
}

const slice = createSlice({
    name: 'createCv',
    initialState: initialCv,
    reducers: {
        setCvProfile: (state, { payload: profile }) => {
            const {
                global,
                ...prf
            } = profile;

            state.global = global;
            state.profile = prf;
        },
        setCvEducation: (state, { payload: education }) => {
            state.education = education;
        },
        setCvExperience: (state, { payload: experience }) => {
            state.experience = experience;
        },
        setCvSkill: (state, { payload: skill }) => {
            state.skillrate = skill;
        },
        setCvAward: (state, { payload: award }) => {
            state.award = award;
        },
        setCvCertification: (state, { payload: cert }) => {
            state.certification = cert;
        },
        resetCvStore: () => initialCv
    },
});

export const {
    setCvProfile,
    setCvEducation,
    setCvExperience,
    setCvSkill,
    setCvAward,
    setCvCertification,
    resetCvStore
} = slice.actions;

export const getCvData = state => state.createCv;

export default slice.reducer;
