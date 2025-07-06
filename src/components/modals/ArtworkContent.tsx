import { useState } from 'react';
import {
  Box,
  Grid,
  Card,
  CardMedia,
  Dialog,
  DialogContent,
  Typography,
} from '@mui/material';

import rumiThumb from '../../assets/art/Rumi_color-thumb.jpg';
import rumiFull from '../../assets/art/Rumi_color-full.jpg';
import jinuThumb from '../../assets/art/Jinu_color-thumb.jpg';
import jinuFull from '../../assets/art/Jinu_color-full.jpg';
import frierenThumb from '../../assets/art/frieren-thumb.jpg';
import frierenFull from '../../assets/art/frieren-full.jpg';
import bakugoThumb from '../../assets/art/bakugo-thumb.jpg';
import bakugoFull from '../../assets/art/bakugo-full.jpg';
import charizardThumb from '../../assets/art/charizard-thumb.jpg';
import charizardFull from '../../assets/art/charizard-full.jpg';
import frierenBWThumb from '../../assets/art/frieren_bw-thumb.jpg';
import frierenBWFull from '../../assets/art/frieren_bw-full.jpg';
import jinxBWThumb from '../../assets/art/jinx_bw-thumb.jpg';
import jinxBWFull from '../../assets/art/jinx_bw-full.jpg';
import tanjiroThumb from '../../assets/art/tanjiro-thumb.png';
import tanjiroFull from '../../assets/art/tanjiro-full.png';
import jinxThumb from '../../assets/art/jinx-thumb.jpg';
import jinxFull from '../../assets/art/jinx-full.jpg';
import viThumb from '../../assets/art/vi-thumb.jpg';
import viFull from '../../assets/art/vi-full.jpg';
import dragoniteThumb from '../../assets/art/dragonite-thumb.jpg';
import dragoniteFull from '../../assets/art/dragonite-full.jpg';


const artwork = [
  { 
    title: 'Rumi (Kpop Demon Hunters)', 
    thumb: rumiThumb,
    full: rumiFull,
  },
  { 
    title: 'Jinu (Kpop Demon Hunters)', 
    thumb: jinuThumb,
    full: jinuFull,
  },
  { 
    title: 'Frieren (Frieren)', 
    thumb: frierenThumb,
    full: frierenFull,
  },
  { 
    title: 'Bakugo (MHA)', 
    thumb: bakugoThumb,
    full: bakugoFull,
  },
  { 
    title: 'Charizard (Pokemon)', 
    thumb: charizardThumb,
    full: charizardFull,
  },
  { 
    title: 'Frieren B&W (Frieren)', 
    thumb: frierenBWThumb,
    full: frierenBWFull,
  },
  { 
    title: 'Jinx B&W (Arcane)',
    thumb: jinxBWThumb,
    full: jinxBWFull,
  },
  { 
    title: 'Tanjiro (Demon Slayer)',
    thumb: tanjiroThumb,
    full: tanjiroFull,
  },
  { 
    title: 'Jinx (Arcane)',
    thumb: jinxThumb,
    full: jinxFull,
  },
  { 
    title: 'Vi (Arcane)',
    thumb: viThumb,
    full: viFull,
  },
  { 
    title: 'Dragonite (Pokemon)',
    thumb: dragoniteThumb,
    full: dragoniteFull
  },
];


const ArtworkContent = () => {
  const [selected, setSelected] = useState<{ title: string, full: string } | null>(null);

  return (
    <>
      <Grid container spacing={3}>
        {artwork.map((art, index) => (
          <Grid size={{ xs:12, sm:6, md:4 }} key={index}>
            <Card
              sx={{
                cursor: 'pointer',
                transition: 'transform 0.2s',
                '&:hover': { transform: 'scale(1.02)' },
              }}
              onClick={() => setSelected({ title: art.title, full: art.full })}
            >
              <CardMedia
                component="img"
                image={art.thumb}
                alt={art.title}
                loading="lazy"
                sx={{
                  height: 250,
                  objectFit: 'cover',
                }}
              />
            </Card>
            <Typography variant="subtitle1" sx={{ mt: 1, textAlign: 'center' }}>
              {art.title}
            </Typography>
          </Grid>
        ))}
      </Grid>

      {/* Full-size viewer */}
      <Dialog open={!!selected} onClose={() => setSelected(null)} maxWidth="md">
        <DialogContent sx={{ p: 0 }}>
          <Box
            component="img"
            src={selected?.full}
            alt={selected?.title}
            sx={{ width: '100%', objectFit: 'contain' }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ArtworkContent;
