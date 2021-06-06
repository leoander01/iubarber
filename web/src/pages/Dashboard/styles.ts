import styled from "styled-components";
import { shade } from "polished";

import ArrowLeftIcon from '../../assets/ArrowLeftIcon.svg'; 
import ArrowRightIcon from '../../assets/ArrowRightIcon.svg';

export const Container = styled.div``;

export const Header = styled.header`
  padding: 32px 0;
  background: #28262e;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  > img {
    height: 80px;
  }
  button {
    margin-left: auto;
    border: 0;
    background: transparent;
    svg {
      color: #999591;
      height: 20px;
      width: 20px;
    }
  }
`;

export const Profile = styled.div`
  margin-left: 80px;
  display: flex;
  align-items: center;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  div {
    margin-left: 16px;
    line-height: 24px;
    display: flex;
    flex-direction: column;

    span {
      color: #f4ede8;
    }

    a {
      text-decoration: none;
      color: #ff9000;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

export const Content = styled.main`
  max-width: 1120px;
  margin: 64px auto;
  display: flex;
`;

export const Schedule = styled.div`
  margin-right: 120px;
  flex: 1;
  h1 {
    font-size: 36px;
  }
  p {
    margin-top: 32px;
    color: #ff9000;
    font-weight: 500;
    display: flex;
    align-items: center;
    span {
      display: flex;
      align-items: center;
    }
    span + span::before {
      content: "";
      width: 1px;
      height: 12px;
      background: #ff9000;
      margin: 0 8px;
    }
  }
`;

export const NextAppointment = styled.div`
  margin-top: 64px;
  > strong {
    color: #999591;
    font-size: 20px;
    font-weight: 400;
  }
  div {
    background: #3e3b46;
    padding: 16px 24px;
    border-radius: 10px;
    margin-top: 24px;
    position: relative;
    display: flex;
    align-items: center;
    &::before {
      content: "";
      position: absolute;
      height: 80%;
      width: 1px;
      left: 0;
      top: 10%;
      background: #ff9000;
    }
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
    strong {
      margin-left: 24px;
      color: #fff;
    }
    span {
      margin-left: auto;
      color: #999591;
      display: flex;
      align-items: center;
      svg {
        color: #ff9000;
        margin-right: 8px;
      }
    }
  }
`;

export const Section = styled.section`
  margin-top: 48px;
  > strong {
    color: #999591;
    font-size: 20px;
    line-height: 26px;
    display: block;
    border-bottom: 1px solid #3e3b47;
    padding-bottom: 16px;
    margin-bottom: 16px;
  }
  > p {
    color: #999591;
    font-weight: 400;
  }
`;

export const Appointment = styled.div`
  display: flex;
  align-items: center;
  & + div {
    margin-top: 16px;
  }
  span {
    margin-left: auto;
    color: #f4ede8;
    width: 72px;
    display: flex;
    align-items: center;
    svg {
      color: #ff9000;
      margin-right: 8px;
    }
  }
  div {
    background: #3e3b46;
    padding: 16px 24px;
    border-radius: 10px;
    margin-left: 24px;
    display: flex;
    align-items: center;
    flex: 1;
    img {
      width: 56px;
      height: 56px;
      border-radius: 50%;
    }
    strong {
      margin-left: 24px;
      color: #fff;
      font-size: 20px;
    }
  }
`;

export const Calendar = styled.aside`
    width: 380px;

    .DayPicker {
        border-radius: 10px;
        font-size: 16px;

        &-wrapper {
            padding-bottom: 0;
            background: #28262e;
            border-radius: 10px;
            z-index: 0;
        }

        &-NavBar {
            position: relative;

            ::before {
            content: '';
            width: 100%;
            height: 50px;
            position: absolute;
            background: #3e3b47;
            border-radius: 10px 10px 0 0;
            z-index: -1;
            }
        }

        &-NavButton {
            color: #999591 !important;
            margin-top: 0;
            top: 0;

            &--prev {
            background: url(${ArrowLeftIcon}) no-repeat center;
            margin-right: 0;
            left: 12px;
            width: 50px;
            height: 50px;
            }

            &--next {
            background: url(${ArrowRightIcon}) no-repeat center;
            right: 12px;
            width: 50px;
            height: 50px;
            }
        }

        &-Month {
            border-collapse: separate;
            border-spacing: 8px;
            margin: 0;
            padding: 0 10px 10px;
        }

        &-Caption {
            line-height: 50px;
            color: #f4ede8;

            > div {
            text-align: center;
            }
        }

        &-Weekday {
            color: #666360;
            font-size: 16px;
        }

        &-Day {
            width: 40px;
            height: 40px;
            transition: all 0.2s ease;
            border-radius: 10px;

            &--today {
            font-weight: normal;
            color: #fff;
            }

            &--available:not(.DayPicker-Day--outside) {
            background: #3e3b47;
            border-radius: 10px;
            }

            &--disabled {
            color: #666360;
            background: transparent !important;
            }

            &--selected:not(.DayPicker-Day--disabled) {
            background: #ff9000 !important;
            color: #232129 !important;
            }
        }

        &:not(.DayPicker--interactionDisabled)
            .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
            background: ${shade(0.2, '#3e3b47')};
        }
    }
`;
