import React from 'react';

import { Container, BannerItem, Title, RateContainer, Rate} from './styles';

import { Ionicons } from '@expo/vector-icons';

function SliderItem(){
    return(
        <Container activeOpacity={0.7}>
            <BannerItem
                source={{ uri:'https://images.unsplash.com/photo-1633704797971-eacd062c9d8a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1173&q=80'}}
                />

                <Title numberOfLines={1}>Televisores </Title>

                <RateContainer>
                    <Ionicons name="md-star" size={12} color="#E7A74E" />
                    <Rate>9/10</Rate>
                </RateContainer>
        </Container>
    )
}

export default SliderItem;