import React from "react";
import { Image, Item, Icon, Grid } from 'semantic-ui-react'

export default function Post({ title, description, url, votes, writer_avatar_url, post_image_url, substractVote, addVote }) {

    return (
        <Item >
            <Grid container stackable verticalAlign='middle'>
                <Grid.Column width={5}>
                    <Item.Image href={url} target="_blank" size='medium' src={post_image_url} verticalAlign='middle' />
                </Grid.Column>
                <Grid.Column width={3}>
                    <Item.Content verticalAlign='middle' >
                        <h2><h4>Votes:</h4>
                            <Icon name='caret up' link onClick={addVote} /><br></br>
                            {votes}<br></br>
                            <Icon name='caret down' link onClick={substractVote} /><br></br>
                        </h2>
                    </Item.Content>
                </Grid.Column>
                <Grid.Column width={8} textAlign={'justified'}>
                    <Item.Content>
                        <Item.Header href={url} target="_blank" > <h3>{title}</h3> </Item.Header><br></br>
                        <Item.Description >{description}</Item.Description>
                        <Item.Extra >Escrito por: <Image src={writer_avatar_url} avatar /></Item.Extra>
                    </Item.Content>
                </Grid.Column>
            </Grid>
        </Item>
    );
}