import styled from "styled-components";
import { motion } from "motion/react";

export const DirectoryContainer = styled.section`
  padding:120px 7%;

  border-top:1px solid var(--border);

  background:var(--background);

`;

export const DirectoryHeader=styled.div`
  margin-width:650px;
  margin-bottom:70px;
`;

export const DirectoryEyebrow=styled.p`
  margin:0 0 24px;

  color: var(--accent);

  font-family:'DM Sans', sans-serif;
  font-size:0.7rem;
  font-weight:600;

  letter-spacing:0.16em;
  text-transform:uppercase;

`;

export const DirectoryTitle=styled(motion.h2)`
  margin:0;

  font-family:'Playfair Display', serif;
  font-size:clamp(3rem,5vw,5rem);
  font-weight:500;
  line-height:0.95;
  letter-spacing:-0.04em;
`;

export const DirectoryList=styled.div`
 border-top:1px solid var(--border);
`;



export const CategoryName = styled.span`
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.8rem, 3vw, 3rem);
`;

export const CategoryNumber = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-size: 1rem;
  color: var(--muted);
`;

export const CategoryRow = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 24px 0;

  border-bottom: 1px solid var(--border);

  cursor: pointer;

  transition:
    padding 0.3s ease,
    color 0.3s ease;

  &:hover {
    padding-left: 20px;
    padding-right: 20px;
    color: var(--accent);
  }
`;

export const CategoryArrowWrapper = styled(motion.span)`
  display: inline-flex;
  width: 36px;
  overflow: hidden;
  margin-left: 12px;
`;

export const CategoryArrow = styled(motion.img)`
  width: 36px;
  height: auto;
  flex-shrink: 0;
`;