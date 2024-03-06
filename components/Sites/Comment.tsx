'use client';
import { useState } from 'react';
import { Button, List, Avatar, Popconfirm } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { TComment } from '@/types';
import { request } from '@/utils/request-client';
import dayjs from 'dayjs';

type Props = {
  comment: TComment;
};

export const Comment = ({ comment }: Props) => {
  const [loading, setLoading] = useState(false);

  const onDeleteComment = async (comment: TComment) => {
    setLoading(true);
    await request({
      method: 'DELETE',
      path: `/comments/${comment._id}?secret=${comment.secret}`,
    });
  };

  return (
    <List.Item
      key={comment._id}
      actions={[
        <Popconfirm
          key={`${comment._id}-delete`}
          destroyTooltipOnHide
          title="Delete comment"
          description="Are you sure to delete this comment?"
          okText="Yes"
          cancelText="No"
          onConfirm={() => onDeleteComment(comment)}
        >
          <Button type="text" loading={loading} icon={<DeleteOutlined />} />
        </Popconfirm>,
      ]}
    >
      <List.Item.Meta
        avatar={
          <Avatar
            src={`https://www.gravatar.com/avatar/${comment.gravatar}?d=monsterid`}
          />
        }
        title={<>{comment.author}</>}
        description={
          <>
            <a style={{ fontSize: 12 }} target="_blank" href={comment.pageUrl}>
              {dayjs(comment.createdAt).format('HH:mm - DD MMM YYYY')}
            </a>
            <div>{comment.body}</div>
          </>
        }
      />
    </List.Item>
  );
};
