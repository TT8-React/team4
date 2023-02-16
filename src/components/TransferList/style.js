import List from '@mui/material/List';
import Card from '@mui/material/Card';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';


import { styled } from '@mui/material/styles';

export const StyledList = styled(List)(() => ({
    '&.MuiList-root' : {
        padding : '0',
        backgroundColor: '#F2F2F2',
        border: '1px solid #AAAAAA',
        borderRadius: '10px',
        minWidth: 500
    }
}))

export const StyledListItem = styled(ListItem)(({theme, active}) => ({
    '&.MuiListItem-root' : {
        backgroundColor: `${active ? '#ccc' : '#f2f2f2'}`,
        padding : `${theme.spacing(1.5)} ${theme.spacing(2)}`,
        borderTop: '1px solid #AAAAAA',

    }
}))
export const StyledCard = styled(Card)(() => ({
    '&.MuiCard-root' : {
        backgroundColor: 'transport',
        boxShadow : 'none',
    }
}))

export const StyledButton = styled(Button)(({theme}) => ({
    '&.MuiButton-root' : {
        padding : 1,
        fontSize : 15,
        backgroundColor : '#000',
        color : '#fff',
    },
    '&.Mui-disabled' : {
        backgroundColor : '#ccc',
        color : '#fff',
    }
}))
